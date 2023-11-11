import React, { useState, useEffect, useContext, forwardRef, useImperativeHandle } from 'react';
import { StyledSection, StyledSlideLoaderItem, StyledSlideLoadersContainer } from './index.styled';
import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AppContext } from '@/app-context';

const SlideLoaders = forwardRef((_, ref) => {
  const [slideLoaderItems, setSlideLoaderItems] = useState<React.ReactNode[]>([]);
  const [widths, setWidths] = useState<number[]>([0, 0, 0, 0]);
  const [pause, setPause] = useState<boolean>(false);
  const { slideCurrent, setSlideCurrent } = useContext(AppContext);

  const childFunction = (type: 'next' | 'prev') => {
    console.log('Child function triggered::::::::::::::');
    if (type === 'next') {
      if (slideCurrent === widths.length - 1) {
        setWidths((prevWidths) => prevWidths.map(() => 0));
      } else {
        setWidths((prevWidths) => {
          const updatedWidths = [...prevWidths];
          // updatedWidths[currents.current] += 1;
          updatedWidths[slideCurrent] = 100;
          return updatedWidths;
        });
      }
    }

    if (type === 'prev') {
      if (slideCurrent !== 0) {
        setWidths((prevWidths) => {
          const updatedWidths = [...prevWidths];
          // updatedWidths[currents.current] += 1;
          updatedWidths[slideCurrent] = 0;
          updatedWidths[slideCurrent - 1] = 0;
          return updatedWidths;
        });
      }
    }
  };

  useImperativeHandle(ref, () => ({
    childFunction,
  }));

  const time = 7;

  useEffect(() => {
    let intervalId: any;

    if (!pause) {
      intervalId = setInterval(() => {
        if (widths.every((element) => element === 100)) {
          setWidths((prevWidths) => prevWidths.map(() => 0));
          // currents.current = 0;
          setSlideCurrent(0);
        } else {
          // if (widths[currents.current] === 100) {
          if (widths[slideCurrent] === 100) {
            // currents.current = currents.current === slideLoaderItems.length - 1 ? 0 : currents.current + 1;
            setSlideCurrent(slideCurrent === slideLoaderItems.length - 1 ? 0 : slideCurrent + 1);
          } else {
            setWidths((prevWidths) => {
              const updatedWidths = [...prevWidths];
              // updatedWidths[currents.current] += 1;
              updatedWidths[slideCurrent] += 1;
              return updatedWidths;
            });
          }
        }
      }, time * 10);
    }

    // console.log(widths)
    // console.log(slideCurrent)

    return () => {
      clearInterval(intervalId);
    };
  }, [pause, widths, slideLoaderItems, slideCurrent]);

  useEffect(() => {
    const updatedItems: React.ReactNode[] = [];

    for (let index = 0; index < 4; index++) {
      updatedItems.push(
        <StyledSlideLoaderItem width={`${widths[index]}%`} key={index}>
          <div className="progress"></div>
        </StyledSlideLoaderItem>
      );
    }

    setSlideLoaderItems(updatedItems);
  }, [widths]);

  return (
    <StyledSection>
      {pause && (
        <motion.div
          whileTap={{ scale: 0.9 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <BsPlayCircle
            className="play"
            size={20}
            color="#ffffff"
            onClick={() => setPause(false)}
          />
        </motion.div>
      )}

      {!pause && (
        <motion.div
          whileTap={{ scale: 0.9 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <BsPauseCircle
            className="pause"
            size={20}
            color="#ffffff"
            onClick={() => setPause(true)}
          />
        </motion.div>
      )}

      <StyledSlideLoadersContainer>{slideLoaderItems}</StyledSlideLoadersContainer>
    </StyledSection>
  );
});

SlideLoaders.displayName = 'slideLoaders';

export default SlideLoaders;
