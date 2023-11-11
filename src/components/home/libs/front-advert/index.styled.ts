import styled, { keyframes } from "styled-components";


interface FrontAdvertContainerProps {
    isMobile: boolean
}


export const StyledFrontAdvertContainer = styled.div<FrontAdvertContainerProps>`
    max-width: 100vw;
    margin: 0;
    overflow-x: hidden;
    height: ${(props) => props.isMobile && '500px'};
    background-color: ${(props) => props.theme.secondaryColor};
    background-image: ${(props) => props.isMobile ? `url('/assets/svgs/FrontPicMobile.svg')` : ''};
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.isMobile ? '0 24px' : '0 64px'};
    position: relative;
    margin-top: ${(props) => props.isMobile ? '60px' : '60px'};
`

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
        font-family: ${(props) => props.theme.fonts.jost};
        /* font-family: 'Anton', sans-serif; */
        font-size: ${(props) => props.isMobile ? '64px' : '6vw'};
        font-weight: bolder;
        line-height: ${(props) => props.isMobile ? '60px' : '80px'};;
        padding: 0;
        margin: 0;
        /* letter-spacing: 10px; */

        .name {
      font-family: ${(props) => props.theme.fonts.jost};
      font-size: ${(props) => (props.isMobile ? "64px" : "96px")};
      font-weight: bolder;
      line-height: ${(props) => (props.isMobile ? "60px" : "80px")};
      padding: 0;
      margin: 0;
      /* letter-spacing: 10px; */
      background-image: linear-gradient(to left, #fca311 40%, #FFD288);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: ${gradientAnimation} 6s linear infinite;
    }
        }

    .role{
            font-family: ${(props) => props.theme.fonts.palanquin};
            font-weight: bold;
            letter-spacing: 5px;
    }

    .button-container{
        display: flex;
        align-items: center;
        /* line-height: 0px; */
        .right-icon{
            color: ${(props) => props.theme.accent}
        }
    }

    .three-boxes{
        position: absolute;
        top: -2%;
        left: 15%;      
    }
`

export const StyledBrandIcons = styled.div<FrontAdvertContainerProps>`
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 10px;
    /* justify-content: ${(props) => props.isMobile ? 'center' : 'flex-start'} */
`
