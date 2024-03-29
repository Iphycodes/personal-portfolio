import styled from 'styled-components';

interface MyWorksProps {
  isMobile?: boolean;
}

export const StyledMyWorksContainer = styled.div<MyWorksProps>`
  .main-title {
    margin-bottom: 96px;
    font-size: 60px;
    font-family: ${(props) => props.theme.fonts.jost};
    background-image: linear-gradient(to left, #ffffff 40%, #cccccc);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    gap: 50px;

    .my-works-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;

      .title {
        font-size: 28px;
        width: 300px;
        .tag {
          color: ${(props) => props.theme.accent};
          font-size: 10px;
        }
      }

      .body {
        font-size: 14px;
      }
    }

    .my-works-image {
      /* box-shadow: 4px 3px 30px 0px rgba(91, 91, 91, 0.25); */
      box-shadow: 10px 3px 50px 10px rgba(137, 137, 137, 0.2);
      .img {
      }
    }
  }

  max-width: 100vw;
  margin: 0;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.secondaryColor};
  /* align-items: flex-end; */
  padding: ${(props) => (props.isMobile ? '24px' : '64px 120px')};
  padding-bottom: 0;
  position: relative;
  height: ${(props) => (props.isMobile ? '900px' : '')};
`;
