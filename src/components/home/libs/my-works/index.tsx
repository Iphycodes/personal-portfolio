import React from 'react';
import { StyledArrowContainer, StyledMyWorksContainer } from './index.styled';
import Image from 'next/image';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { CSSProperties } from 'styled-components';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const MyWorks = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   swipeToSlide: true,
  //   slideToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 5000,
  //   fade: true,
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    swipeToSlide: false,
    slideToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  function PrevArrow({ onClick }: ArrowProps) {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
    return (
      <motion.span className="left-arrow-div" whileTap={{ scale: 0.6 }}>
        <StyledArrowContainer className="left-arrow" onClick={handleClick}>
          <BsArrowLeft />
        </StyledArrowContainer>
      </motion.span>
    );
  }

  function NextArrow({ onClick }: ArrowProps) {
    const handleClick = () => {
      if (onClick) {
        onClick();
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

  const myWorkData = [
    {
      title: 'Comprehensive Dashboard Screen Design',
      description:
        'A custom-designed dashboard screen created for a client on a contract basis. This project underscores my ability to translate client needs into visually stunning and user-friendly digital solutions, further showcasing my passion for crafting meaningful design experiences.',
      tag: 'contract',
      imgUrl: '/assets/imgs/landing.png',
    },
    {
      title: 'Food Ordering Web Application',
      description:
        'I spearheaded a collaborative effort with a dedicated team to craft a robust food ordering system software application. Our combined expertise culminated in a seamless solution that enhances efficiency and customer satisfaction.',
      tag: 'collaboration',
      imgUrl: '/assets/imgs/food-page.png',
    },
    {
      title: 'Simple Landing Page Implemention',
      description:
        'Introducing a bespoke landing page, meticulously crafted to showcase the depth of my development prowess and creative flair. Explore a dynamic snapshot of my skills and achievements, seamlessly integrated into my personal portfolio website, offering a glimpse into my passion for innovation and design.',
      tag: 'personal',
      imgUrl: '/assets/imgs/light-dashboard.png',
    },
    {
      title: 'Fintech Application',
      description:
        'Collaborated within a dynamic team to develop a cutting-edge fintech application aimed at addressing key challenges within the banking sector. Leveraged collective expertise to create innovative solutions that enhance financial accessibility and efficiency.',
      tag: 'collaboration',
      imgUrl: '/assets/imgs/fin-dashboard.png',
    },
  ];

  return (
    <StyledMyWorksContainer>
      <div className="main-title">My Works</div>
      <div className="about-desc-slider">
        <Slider
          initialSlide={0}
          {...settings}
          cssEase="ease-in-out"
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {myWorkData.map(({ description, title, tag, imgUrl }, index) => {
            // console.log('initial slide:::::', toShow);
            return (
              <div className="main-content" key={index}>
                <div className="my-works-content">
                  <div className="title">
                    <div className="item-title">{title}</div>
                    <span className="tag">{tag}</span>
                  </div>
                  <div className="body">{description}</div>
                </div>
                <div className="my-works-image">
                  <Image
                    // src={'/assets/imgs/myworks_landing_page_pic.png'}
                    className="img"
                    src={`${imgUrl}`}
                    alt="my-work"
                    width={800}
                    height={800}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </StyledMyWorksContainer>
  );
};

export default MyWorks;
