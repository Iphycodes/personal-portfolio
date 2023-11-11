import React from 'react';
import { useEffect, useState } from 'react';
import {
  StyledSkillListContainer,
  StyledSkillSectionContainer,
  StyledTotalContainer,
} from './index.styled';
import { Circle } from 'react-circle';
import { Desktop, mediaSize, useMediaQuery } from '@/_shared/responsiveness';

const SkillSection = () => {
  const [skillTotal, setSkillTotal] = useState<number>(0);
  const isMobile = useMediaQuery(mediaSize.mobile);
  const skillData = [
    {
      title: 'React Js',
      level: 80,
    },
    {
      title: 'Next Js',
      level: 85,
    },
    {
      title: 'Vue Js',
      level: 60,
    },
    {
      title: 'Typescript',
      level: 80,
    },
  ];

  useEffect(() => {
    let total = 0;
    skillData.map(({ level }) => {
      total += level;
    });
    const averageTotal = Number((total / skillData.length).toFixed(1));
    setSkillTotal(averageTotal);
  }, []);
  return (
    <StyledSkillSectionContainer isMobile={isMobile}>
      <StyledTotalContainer isMobile={isMobile}>
        <div className="total">Total AVG Score</div>
        <div className="total-circle">
          {/* <span>{skillTotal}%</span> */}
          <Circle
            animate={true}
            animationDuration="2s"
            roundedStroke={true}
            progress={skillTotal} // Specifies the fill percentage of the inner red border
            progressColor="#0019FF" // Sets the color of the inner red border
            bgColor="transparent" // Sets the background color as transparent
            lineWidth={'30'} // Sets the thickness of the blue border
            textStyle={{ fontSize: '5rem' }} // Customizes the text style if needed
            size={isMobile ? '180' : '200'} // Sets the size of the circle
            textColor="#ffffff"
          />
        </div>

        <div className="frontend">Frontend Development</div>
      </StyledTotalContainer>
      <Desktop>
        <hr className="vertical-line" />
      </Desktop>
      <StyledSkillListContainer isMobile={isMobile}>
          <div className="title">Skill</div>
        <div className="skill-items">
          {skillData.map(({ title, level }, index) => {
            return (
              <div key={index} className="skill-item">
                <span>{title}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="entire-line">
                    <div className="filled-line" style={{ width: `${level}%` }}></div>
                  </div>
                  <span>{level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </StyledSkillListContainer>
    </StyledSkillSectionContainer>
  );
};

export default SkillSection;
