import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  StyledAboutImagesContainer,
  StyledAboutSectionContainer,
  StyledAboutSectionContent,
  StyledAboutSectionDescription,
  StyledArrowContainer,
} from './index.styled';

import { AiFillCaretRight } from 'react-icons/ai';
import Link from 'next/link';
import SlideLoaders from './libs/slide-loaders';
import Slider from 'react-slick';
import { AppContext } from '@/app-context';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { CSSProperties } from 'styled-components';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import Image from 'next/image';

interface AboutSectionProps {
  toShow: number;
}

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const AboutSection = (props: AboutSectionProps) => {
  const { slideCurrent, setSlideCurrent } = useContext(AppContext);
  const { toShow } = props;
  const sliderRef = useRef<Slider>(null);
  const slideLoaderRef = useRef<any>(null);
  const [content, setContent] = useState('');
  const isMobile = useMediaQuery(mediaSize.mobile);

  const goToSlide = (slideIndex: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex);
    }
  };

  const aboutData = [
    {
      title: 'About Me',
      description:
        "I'm a dedicated frontend developer with a knack for transforming ideas into captivating digital experiences. With a deep passion for coding and a keen eye for design, I specialize in crafting visually stunning and user-friendly websites and web applications that leave a lasting impression.<br> Collaboration is at the heart of my approach. I actively engage with clients and team members to understand project goals, working closely with designers and backend developers to bring ideas to life.",
    },
    {
      title: 'Career Aims and Objective',
      description:
        'As a frontend developer, my ultimate goal is to craft visually stunning and intuitive web experiences that captivate users. I strive to stay at the forefront of cutting-edge technologies and trends, continuously enhancing my skills to deliver innovative solutions.',
    },
    {
      title: 'Academic Background',
      description:
        'With a strong academic foundation, I bring expertise and a thirst for knowledge to every project. Armed with a <strong>Bachelors degree in Bsc. Computer Science from the prestigious Ahmadu Bello University, Nigeria</strong>, I possess a solid understanding of fundamental principles and the ability to tackle complex challenges. My educational journey has equipped me with a diverse skill set, including problem-solving, critical thinking, and effective communication.',
    },
    {
      title: 'Career Summary',
      description: 'This is my career summary',
    },
  ];

  useEffect(() => {
    console.log(`I just change to ${toShow}`);
    goToSlide(toShow);

    setContent(aboutData[toShow]?.title || '');
  }, [toShow]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: false,
    slideToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const handleChildFunction = (type: 'next' | 'prev') => {
    if (slideLoaderRef.current) {
      slideLoaderRef.current?.childFunction(type);
    }

    console.log('from parent::::::');
  };

  const handleArrowClick = (type: 'next' | 'prev') => {
    if (type === 'next') {
      slideCurrent === aboutData.length - 1
        ? setSlideCurrent(0)
        : setSlideCurrent(slideCurrent + 1);
    } else {
      slideCurrent === 0 ? setSlideCurrent(0) : setSlideCurrent(slideCurrent - 1);
    }
  };

  function PrevArrow({ onClick }: ArrowProps) {
    const handleClick = () => {
      handleChildFunction('prev');

      if (onClick) {
        onClick();

        handleArrowClick('prev');
      }
    };
    return slideCurrent > 0 ? (
      <motion.span className="left-arrow-div" whileTap={{ scale: 0.6 }}>
        <StyledArrowContainer className="left-arrow" onClick={handleClick}>
          <BsArrowLeft />
        </StyledArrowContainer>
      </motion.span>
    ) : (
      <></>
    );
  }

  function NextArrow({ onClick }: ArrowProps) {
    const handleClick = () => {
      handleChildFunction('next');

      if (onClick) {
        onClick();

        handleArrowClick('next');
      }
    };
    return (
      <motion.span className="right-arrow-div" whileTap={{ scale: 0.6 }}>
        <StyledArrowContainer className="right-arrow" onClick={handleClick}>
          <BsArrowRight />
        </StyledArrowContainer>
      </motion.span>
    );
  }

  return (
    <StyledAboutSectionContainer isMobile={isMobile} style={{}}>
      {/* <StyledAboutImageSection isMobile={isMobile}>
        <SocialProfile />
        <AboutImage />
      </StyledAboutImageSection> */}
      <StyledAboutImagesContainer>
        <div className="image-container left">
          <Image
            src={'/assets/imgs/suit-pic.jpg'}
            alt="suite-pic"
            width={300}
            height={450}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="image-container right">
          <div className="right-pic-container">
            <Image
              src={'/assets/imgs/graduating-pic.jpg'}
              alt="graduating-pic"
              width={300}
              height={380}
              style={{ width: '100%', height: '100%', borderRadius: '30px' }}
            />
          </div>
          <div className="right-content">
            <span style={{ fontSize: '64px' }}>3</span>
            <span style={{ color: '#ffffff' }}>
              Years of <b />
              Experience
            </span>
          </div>
        </div>
      </StyledAboutImagesContainer>
      <StyledAboutSectionContent isMobile={isMobile} style={{ gap: 40 }}>
        <div className="content-title">
          <div className="about">ABOUT</div>
          <div>
            <span className="ghost-text">IFEANYI</span> OGBONNA
          </div>
          {aboutData.map(({ title }, index) => {
            return (
              <span key={index} className={`tag ${content === title ? '' : 'fade-out'}`}>
                {title}
              </span>
            );
          })}
          {/* <span className={`tag ${content === '' ? 'fade-out' : ''}`}>{content}</span> */}
          {/* <span className={`tag`}>{content}</span> */}
        </div>

        <SlideLoaders ref={slideLoaderRef} />
        {/* <button onClick={() => handleChildFunction('next')}>Child function</button> */}

        <div className="about-desc-slider">
          <Slider
            ref={sliderRef}
            initialSlide={toShow}
            {...settings}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            {aboutData.map(({ description, title }, index) => {
              console.log('initial slide:::::', toShow);
              return (
                <StyledAboutSectionDescription key={index}>
                  <div>
                    <div className="item-title">{title}</div>
                    <div
                      className="item-description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                  </div>

                  <Link
                    className="learn-more-link"
                    href={'/about'}
                    style={{ display: index === toShow ? 'flex' : 'none' }}
                  >
                    <span className="learn-more-icon">
                      <AiFillCaretRight />
                    </span>{' '}
                    <span>Learn more</span>
                  </Link>
                </StyledAboutSectionDescription>
              );
            })}
          </Slider>
        </div>
      </StyledAboutSectionContent>
    </StyledAboutSectionContainer>
  );
};

export default AboutSection;

// function PrevArrow({ onClick }: ArrowProps) {
//   return (
//     <motion.span className='left-arrow-div' whileTap={{ scale: 0.6 }}>
//       <StyledArrowContainer className="left-arrow" onClick={onClick}>
//         <BsArrowLeft />
//       </StyledArrowContainer>
//     </motion.span>
//   );
// }
