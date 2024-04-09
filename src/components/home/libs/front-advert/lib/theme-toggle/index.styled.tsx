import styled from 'styled-components';

interface ThemeToggleProps {
  isMobile?: boolean;
}

interface ThemeIconProps extends ThemeToggleProps {
  active: boolean;
}

export const StyledThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transform: rotate(-90deg); /* Rotate the div by 90 degrees */
  font-size: 14px;
  font-weight: bold;
`;

export const StyledThemeIconsContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 40px;
`;

export const StyledThemeIcon = styled.span<ThemeIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? props.theme.accent : 'transparent')};
  color: ${(props) => (props.active ? '#000000' : '#ffffff')};
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
