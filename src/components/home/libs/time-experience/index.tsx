import React from 'react';
import {
  StyledTimeExperienceBox,
  StyledTimeExperienceSectionContainer,
  StyledTimeExperinceContent,
  StyledTimeExperinceContentItems,
} from './index.styled';
import { FaCode } from 'react-icons/fa';
import { MdOutlineDesignServices, MdWeb } from 'react-icons/md';
import Slider from 'react-slick';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';

const TimeExperience = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  const skillExperiences = [
    {
      title: 'Frontend Developer',
      description:
        'I specialize in Frontend development with the good understanding of diverse frontend technologies such as Javascript, Typescript, React.Js, Next.Js,',
    },
    {
      title: 'UI/UX Design',
      description:
        'I create well structured and responsive UI/UX designs with the use of design tools such as Figma, Sketch and Adobe XD.',
    },
    {
      title: 'Website Designer',
      description:
        'I design fully functional and responsive website with a professional understanding of tools like Wordpress and Wix. editt',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToScroll: 1,
  };

  return (
    <StyledTimeExperienceSectionContainer isMobile={isMobile} style={{ gap: isMobile ? 35 : 50 }}>
       <StyledTimeExperienceBox isMobile={isMobile}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div className="year_amount">
            <span className='year' style={{ fontSize: isMobile ? '60px' : '96px', lineHeight: '10px' }}>2</span>+
          </div>
          <div className="year_text">
            <div>Years</div>
            <div>Working</div>
            <div>Experience</div> 
          </div>
        </div>
      </StyledTimeExperienceBox>
      <StyledTimeExperinceContent isMobile={isMobile}>
      <Slider {...{ ...settings, slidesToShow: isMobile ? 1 : 3 }}>
        {skillExperiences.map(({ title, description }, index) => {
          return (
            <StyledTimeExperinceContentItems isMobile={isMobile} key={index} style={{gap: 20}}>
              {title === 'Frontend Developer' && <FaCode size={isMobile ? 25 : 30} />}
              {title === 'UI/UX Design' && <MdOutlineDesignServices size={isMobile ? 25 : 30} />}
              {title === 'Website Designer' && <MdWeb size={isMobile ? 25 : 30} />}
              <div style={{ fontWeight: 'bolder', fontSize: isMobile ? '16px' : '18px', marginBottom: '5px' }}>{title}</div>
              <div style={{ textAlign: 'justify', fontSize: isMobile ? '14px' : '16px' }}>{description}</div>
            </StyledTimeExperinceContentItems>
          );
        })}
      </Slider>
      </StyledTimeExperinceContent>
</StyledTimeExperienceSectionContainer>
  );
};

export default TimeExperience;
