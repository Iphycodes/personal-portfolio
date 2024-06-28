import React, { useState } from 'react';
import { Desktop, mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import {
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
// import ThemeToggle from '../../../../app/lib/theme-toggle';
import Link from 'next/link';
import VideoModal from '../video-modal';

const FrontAdvert = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

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
    <div className="background" style={{ width: '100%' }}>
      <StyledOuterContainer isMobile={isMobile}>
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
                <Link href={'#myworks-section'}>VIEW MY WORKS</Link>
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

              <StyledIntroContainer onClick={() => setIsVideoModalOpen(true)}>
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
              style={{ height: '110%', width: '50%' }}
            />
          )}
          <Desktop>
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
          </Desktop>
        </StyledFrontAdvertContainer>
      </StyledOuterContainer>
      <VideoModal isModalOpen={isVideoModalOpen} setIsModalOpen={setIsVideoModalOpen} />
    </div>
  );
};

export default FrontAdvert;
