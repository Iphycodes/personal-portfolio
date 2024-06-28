import React from 'react';
import {
  StyledThemeIcon,
  StyledThemeIconsContainer,
  StyledThemeToggleContainer,
} from './index.styled';
import { BsSun, BsMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  return (
      <StyledThemeToggleContainer>
        <span>LIGHT</span>
        <StyledThemeIconsContainer>
          <StyledThemeIcon active={false}>
            <BsSun size={15} />
          </StyledThemeIcon>
          <StyledThemeIcon active={true}>
            <BsMoonFill size={15} />
          </StyledThemeIcon>
        </StyledThemeIconsContainer>
        <span>DARK</span>
      </StyledThemeToggleContainer>
  );
};

export default ThemeToggle;
