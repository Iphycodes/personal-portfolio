import React from 'react';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import {
  LeftSider,
  StyledBrandIcons,
  StyledFrontAdvertContainer,
  StyledFrontContent,
  StyledIntroContainer,
  StyledOuterContainer,
  StyledSocialIcons,
} from './index.styled';
import { BsArrowUpRight, BsFillPlayFill } from 'react-icons/bs';
import {
  AiOutlineLine,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';

import {
  BihanceIcon,
  BihanceIconBig,
  SkillShareICon,
  SkillShareIconBig,
  TablerIcon,
  TablerIconBig,
  UpworkIcon,
  UpworkIconBig,
} from '@/_shared/assets/svgs';
import Image from 'next/image';
import ThemeToggle from './lib/theme-toggle';

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
      <StyledOuterContainer>
        <LeftSider>
          <ThemeToggle />
        </LeftSider>
        <StyledFrontAdvertContainer isMobile={isMobile}>
          <StyledFrontContent isMobile={isMobile} style={{ gap: isMobile ? 0 : 0 }}>
            <div className="description">
              <div style={{ fontSize: '24px', zIndex: 1 }}>Hello,</div>
              <div>
                <span>I'M IFEANYI...</span>
              </div>
              <div className="role">SOFTWARE DEVELOPER</div>
              <div className="about-me">
                As a passionate frontend developer, I blend creativity and technical expertise to
                bring digital visions to life.
              </div>
              <div className="view-works-container">
                <span className="view-works-circle">
                  <BsArrowUpRight color="#ffffff" size={28} style={{ fontWeight: '900' }} />
                </span>
                <span>VIEW MY WORKS</span>
              </div>
            </div>
          </StyledFrontContent>
          <StyledBrandIcons isMobile={isMobile} style={{ gap: 30 }}>
            <>
              {isMobile
                ? mobileBrandIcons.map((mobileBrandIcon, index) => {
                    return <div key={index}>{mobileBrandIcon.icon}</div>;
                  })
                : bigBrandIcons.map((bigBrandIcon, index) => {
                    return <div key={index}>{bigBrandIcon.icon}</div>;
                  })}

              <StyledIntroContainer>
                <span className="intro-circle">
                  <BsFillPlayFill size={30} />
                </span>
                <span>WATCH INTRO</span>
              </StyledIntroContainer>
            </>
          </StyledBrandIcons>

          {!isMobile && (
            <Image
              src={'/assets/imgs/main-pic-darkyy.png'}
              alt="main-pic-dark"
              width={900}
              height={600}
              style={{ height: '110%' }}
            />
          )}
          <StyledSocialIcons>
            <span className="follow-me-text">Follow Me</span>
            <AiOutlineLine className="follow-me-text" style={{ marginTop: '3px' }} />
            <span>/</span>
            <AiOutlineInstagram className="social-icon" />
            <span>/</span>
            <AiOutlineTwitter className="social-icon" />
            <span>/</span>
            <AiFillFacebook className="social-icon" />
          </StyledSocialIcons>
        </StyledFrontAdvertContainer>
      </StyledOuterContainer>
    </div>
  );
};

export default FrontAdvert;
