import styled, { keyframes } from 'styled-components';

interface FrontAdvertContainerProps {
  isMobile: boolean;
}

export const StyledOuterContainer = styled.div`
  display: flex;
  max-width: 100vw;
  margin: 0;
  overflow-x: hidden;
  height: 100vh;
  background-color: ${(props) => props.theme.secondaryColor};
  overflow-y: hidden;
  position: relative;
`;

export const LeftSider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  border-right: ${(props) => `1px solid ${props.theme.primaryColor}`};
`;

export const StyledFrontAdvertContainer = styled.div<FrontAdvertContainerProps>`
  max-width: calc(100vw - 100px);
  width: calc(100vw - 100px);
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  /* height: ${(props) => props.isMobile && '500px'}; */
  max-height: 100%;
  background-image: ${(props) => (props.isMobile ? `url('/assets/svgs/FrontPicMobile.svg')` : '')};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.isMobile ? '0 24px' : '0 64px')};
  position: relative;
  margin-top: ${(props) => (props.isMobile ? '60px' : '60px')};
`;

const gradientAnimation = keyframes`
  0% {
    background-position: -200% 0%;
  }
  50% {
    background-position: 200% 0%;
  }
  100% {
    background-position: -200% 0%;
  }
`;

export const StyledFrontContent = styled.div<FrontAdvertContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .description {
    font-family: ${(props) => props.theme.fonts.redditMono};
    font-size: ${(props) => (props.isMobile ? '64px' : '64px')};
    font-weight: 700;
    padding: 0;
    margin: 0;

    .role {
      font-family: ${(props) => props.theme.fonts.redditMono};
      padding: 0;
      margin: 0;
      background-image: linear-gradient(to left, #bae935 40%, #ebffb1);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: ${gradientAnimation} 6s linear infinite;
      margin-bottom: 20px;
    }

    .about-me {
      font-family: 'Palanquin', sans-serif;
      font-weight: normal;
      font-size: 16px;
      color: lightgrey;
      width: 500px;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }

  .view-works-container {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-family: 'Palanquin', sans-serif;
    letter-spacing: 4px;

    .view-works-circle {
      width: 80px;
      height: 80px;
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    /* line-height: 0px; */
    .right-icon {
      color: ${(props) => props.theme.accent};
    }
  }

  .three-boxes {
    position: absolute;
    top: -2%;
    left: 15%;
  }
`;

export const StyledBrandIcons = styled.div<FrontAdvertContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 10px;
  /* justify-content: ${(props) => (props.isMobile ? 'center' : 'flex-start')} */
`;

export const StyledIntroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-family: 'Palanquin', sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;

  .intro-circle {
    width: 80px;
    height: 80px;
    /* background-color: ${(props) => props.theme.primaryColor}; */
    border: ${(props) => `5px solid ${props.theme.primaryColor}`};
    background-color: '#000000';
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) =>
      `5px 10px 40px ${props.theme.primaryColor} , 10px 40px 200px darkgray`};
  }
`;

export const StyledSocialIcons = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 10px;
  transform: rotate(-90deg);
  font-style: 24px;
  top: 45%;
  right: 0px;

  .follow-me-text {
    color: #bae935;
  }

  .social-icon {
    cursor: pointer;
    :hover {
      color: #bae935;
    }
  }
`;
