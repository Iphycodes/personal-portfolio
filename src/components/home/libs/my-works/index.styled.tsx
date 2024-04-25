import styled from 'styled-components';

interface MyWorksProps {
  isMobile?: boolean;
}

export const StyledMyWorksContainer = styled.div<MyWorksProps>`
  .main-title {
    margin-bottom: 76px;
    font-size: 60px;
    font-family: ${(props) => props.theme.fonts.jost};
    background-image: linear-gradient(to left, #ffffff 40%, #cccccc);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .main-content {
    display: flex !important;
    justify-content: space-between;
    width: 100%;
    padding: 1px;
    margin: 0;
    gap: 60px;

    .my-works-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 400px;
      gap: 40px;

      .title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 32px;
        width: 400px;
        .tag {
          color: ${(props) => props.theme.accent};
          font-size: 12px;
        }
      }

      .body {
        font-size: 16px;
      }
    }

    .my-works-image {
      /* box-shadow: 10px 3px 50px 10px rgba(137, 137, 137, 0.2); */
      width: 60%;
      max-width: 60%;
      .img {
      }
    }
  }

  max-width: 100vw;
  margin: 0;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.secondaryColor};
  padding: ${(props) => (props.isMobile ? '24px' : '64px 120px')};
  padding-bottom: 0;
  position: relative;
  height: ${(props) => (props.isMobile ? '900px' : '')};

  .about-desc-slider {
    .left-arrow-div {
      display: 'inline-block';
      z-index: 1;
      right: 60px;
      top: -70px;
      position: absolute !important;
    }

    .right-arrow-div {
      display: inline-block;
      z-index: 1;
      right: 0;
      top: -70px;
      position: absolute !important;
    }
  }
`;

export const StyledArrowContainer = styled.span`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.assets.learn_tag_color};
  color: ${(props) => props.theme.accent};
  box-shadow: ${(props) => props.theme.shadows.light_grey_shadow};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.black};
  }
`;
