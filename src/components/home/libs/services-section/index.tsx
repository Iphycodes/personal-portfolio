import React, { useState } from 'react';
import {
  StyledArrowContainer,
  StyledServicesItem,
  StyledServicesItemsContainer,
  StyledServicesSectionContainer,
} from './index.styled';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import Slider from 'react-slick';
import { BiCodeCurly } from 'react-icons/bi';
import { CSSProperties } from 'styled-components';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const ServicesSection = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  const servicesData = [
    {
      title: 'Web App / Sofware development',
      description:
        'I develop softwares as well as collaboarte with clients to create nicce softwares',
    },
    {
      title: 'Website Design Job',
      description:
        'I help individuals and companies design fully functional and responsive blogs and website, including Ecommerce websites.',
    },
    {
      title: 'Collaboration',
      description:
        'You can add me to your team to collaborate with your developers in building great solutions',
    },
    {
      title: 'Mentorship',
      description:
        'I offer a wide variety of free and paid mentorship programs for individuals who desire to pick up a tech career',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: false,
    slidesToScroll: 1,
  };

  return (
    <StyledServicesSectionContainer isMobile={isMobile}>
      <div className="title">Services</div>
      <StyledServicesItemsContainer className="services-item-container">
        <Slider
          {...{ ...settings, slidesToShow: isMobile ? 1 : 3 }}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {servicesData.map(({ description, title }, index) => {
            return (
              <StyledServicesItem key={index}>
                <BiCodeCurly size={40} className="icon" />
                <div className="item-title">{title}</div>
                <div className="item-description">{description}</div>
              </StyledServicesItem>
            );
          })}
        </Slider>
      </StyledServicesItemsContainer>
    </StyledServicesSectionContainer>
  );
};

function PrevArrow({ onClick }: ArrowProps) {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <motion.span className="prev-arrow-div" whileTap={{ scale: 0.6 }}>
      <StyledArrowContainer onClick={handleClick}>
        <BsArrowLeft />
      </StyledArrowContainer>
    </motion.span>
  );
}

function NextArrow({ onClick }: ArrowProps) {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    
    if (onClick) {
      onClick();
    }

    setIsClicked(true);

  };
  return (
      <span
        className={`next-arrow-div ${isClicked ? 'clicked' : ''}`}
        style={{ transform: 'translateX(-60px)' }}
        onClick={handleClick}
      >
        <StyledArrowContainer onClick={handleClick}>
          <BsArrowRight />
        </StyledArrowContainer>
      </span>
  );
}

export default ServicesSection;
