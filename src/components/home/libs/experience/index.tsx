import React, { useState } from 'react';
import {
  StyledArrowContainer,
  StyledExperienceContainer,
  StyledExperienceItemsContainer,
} from './index.styled';
import Slider from 'react-slick';
import { CSSProperties } from 'styled-components';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const ExperienceSection = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  const ExperienceItemsData = [
    {
      logoUrl: '/assets/imgs/voomswaylogo.png',
      company: 'Voomsway',
      title: 'Intern Frontend Developer',
      description: 'Had an Internship program with voomsway transcorp',
    },
    {
      logoUrl: '/assets/imgs/kasshLogo.png',
      company: 'Kassh',
      title: 'Junior Frontend Developer',
      description: 'worked as a junior frontend developer with kassh finance company',
    },
    {
      logoUrl: '/assets/imgs/chowvilleLogo.png',
      company: 'Chowville',
      title: 'Junior Frontend Devloper',
      description: 'Collaboraed on a ful-time appointment with chowville food menu comapany',
    },
    {
      logoUrl: '/assets/imgs/blackDomesticLogo.png',
      company: 'BlackDomestic',
      title: 'Team Lead/Mid-Level Frontend Developer',
      description: 'worked as a junior frontend developer with kassh finance company',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(-1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: false,
    slidesToScroll: 1,
    beforeChange: (index: number) => {
      setCurrentSlide(index);
    },
  };

  return (
    <StyledExperienceContainer isMobile={isMobile}>
      <div className="title">Experience</div>
      <StyledExperienceItemsContainer className="experience-item-container" isMobile={isMobile}>
        <Slider
          {...{ ...settings, slidesToShow: isMobile ? 1 : 3 }}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          className="slider"
        >
          {ExperienceItemsData.map(({ logoUrl, company, description, title }, index) => {
            return (
              <div key={index}>
                <div
                  className={`experience-item ${
                    currentSlide + 1 < ExperienceItemsData.length
                      ? index === currentSlide + 1
                        ? 'current'
                        : ''
                      : index === 0
                      ? 'current'
                      : ''
                  }`}
                  style={{ gap: 10 }}
                  key={index}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Image
                      className="logo"
                      style={{ margin: 'auto' }}
                      src={logoUrl}
                      alt="logo"
                      width={40}
                      height={40}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div className="item-title">{title}</div>
                      <div className="item-company">{`@${company}`}</div>
                    </div>
                    <div className="item-description">{description}</div>
                    <div className="read-more" style={{}}>
                      <span>Read more </span>
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </StyledExperienceItemsContainer>
    </StyledExperienceContainer>
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

export default ExperienceSection;
