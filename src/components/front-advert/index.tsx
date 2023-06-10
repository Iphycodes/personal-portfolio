import React from 'react';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import { StyledBrandIcons, StyledFrontAdvertContainer, StyledFrontContent } from './index.styled';
import CustomButton from '../_shared/custom-button';
import { AiFillCaretRight } from 'react-icons/ai';
import {BsDot} from 'react-icons/bs'

import {
  BihanceIcon,
  BihanceIconBig,
  IfyFrontPic,
  SkillShareICon,
  SkillShareIconBig,
  TablerIcon,
  TablerIconBig,
  ThreeBoxes,
  UpworkIcon,
  UpworkIconBig,
} from '@/_shared/assets/svgs';
import { Typewriter } from 'react-simple-typewriter';

const FrontAdvert = () => {

  const isMobile = useMediaQuery(mediaSize.mobile);

  const mobileBrandIcons = [
    {
      icon: <UpworkIcon />,
    },
    {
      icon: <BihanceIcon />,
    },
    {
      icon: <TablerIcon />,
    },
    {
      icon: <SkillShareICon />,
    },
  ];

  const bigBrandIcons = [
    {
      icon: <UpworkIconBig />,
    },
    {
      icon: <BihanceIconBig />,
    },
    {
      icon: <TablerIconBig />,
    },
    {
      icon: <SkillShareIconBig />,
    },
  ];

  return (
    <div className="background">
      <StyledFrontAdvertContainer isMobile={isMobile}>
        <StyledFrontContent isMobile={isMobile} style={{ gap: isMobile ? 20 : 30 }}>
          <div style={{ fontSize: '32px', zIndex: 1, position: 'relative' }}>Hey,</div>
          <div>
            <span style={{ fontSize: '36px', color: '#B0720C' }}>I'm</span> IFEANYI
          </div>
          <div className="name" style={{ letterSpacing: '4px' }}>
            ODOGWU
          </div>
          <div className="role" style={{ fontSize: isMobile ? '20px' : '24px', display: 'flex', alignItems: 'center'}}>
            <BsDot size={40} style={{marginLeft: '-15px'}} color='#ffffff'/>
            <Typewriter
              words={['Frontend Developer', 'UI/UX Designer', 'React Js', 'Next Js']}
              loop
            cursor
            cursorBlinking={true}
            cursorStyle={<span style={{fontSize: '32px', marginBottom: '-10%'}}>|</span>}
            typeSpeed={150}
            deleteSpeed={80}
            delaySpeed={2000}
            />
          </div>
          <div className="button-container" style={{ gap: 15, lineHeight: 0 }}>
            <CustomButton category="ghost" shape="round" border="1px solid #ffffff">
              Hire Me
            </CustomButton>
            <AiFillCaretRight className="right-icon" size={20} />
          </div>
          <div className="three-boxes">
            <ThreeBoxes />
          </div>
        </StyledFrontContent>
        <StyledBrandIcons isMobile={isMobile} style={{ gap: 30 }}>
          <>
            {isMobile
              ? mobileBrandIcons.map((mobileBrandIcon) => {
                  return mobileBrandIcon.icon;
                })
              : bigBrandIcons.map((bigBrandIcon) => {
                  return bigBrandIcon.icon;
                })}
          </>
        </StyledBrandIcons>
        {/* <Desktop style={{}}> */}
        {!isMobile && <IfyFrontPic/>}
        {/* </Desktop> */}
      </StyledFrontAdvertContainer>
    </div>
  );
};

export default FrontAdvert;
