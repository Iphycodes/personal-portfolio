import styled from 'styled-components';

interface AboutSectionProps {
  isMobile?: boolean;
}

export const StyledAboutSectionContainer = styled.div<AboutSectionProps>`
  max-width: 100vw;
  width: 100vw;
  margin: 0;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: space-between;
  gap: 50px;
  padding: ${(props) => (props.isMobile ? '24px' : '64px 120px 0')};
  padding-bottom: 0;
  position: relative;
  /* height: ${(props) => (props.isMobile ? '900px' : '')}; */
`;

export const StyledAboutImageSection = styled.div<AboutSectionProps>`
  /* width: 55%; */
  display: ${(props) => (props.isMobile ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  bottom: 0;
`;

export const StyledAboutSectionContent = styled.div<AboutSectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${(props) => (props.isMobile ? '24px 0' : '5px 0 0')};
  width: ${(props) => (props.isMobile ? '100%' : '50%')};
  min-height: ${(props) => props.isMobile && '800px'};

  .content-title {
    font-family: ${(props) => props.theme.fonts.jost};
    font-size: 74px;
    line-height: 80px;
    font-family: 'Anton', sans-serif;
    letter-spacing: 5px;
    position: relative;

    .about {
      color: ${(props) => props.theme.on_tertiary};
      font-size: 48px;
      line-height: 60px;
    }

    .ghost-text {
      -webkit-text-stroke-color: ${(props) => props.theme.on_tertiary};
      -webkit-text-stroke-width: 1px;
      color: transparent;
      font-family: 'Anton', sans-serif;
      letter-spacing: 7px;
    }

    .tag {
      font-size: 12px;
      background-color: ${(props) => props.theme.accent};
      font-family: 'Joti One', cursive;
      font-weight: bold;
      line-height: 20px;
      padding: 4px;
      letter-spacing: 3px;
      text-align: center;
      color: #000000;
      position: absolute;
      bottom: -18px;
      transform: rotate(-5deg);
    }

    .tag {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }

    .tag.fade-out {
      opacity: 0;
    }
  }

  .learn-more-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.primaryText};
    font-weight: bold;
    margin-top: 20px;
  }

  .learn-more-icon {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.assets.learn_tag_color};
    color: ${(props) => props.theme.accent};
    border-radius: 50%;
    box-shadow: ${(props) => props.theme.shadows.light_grey_shadow};
  }

  .left-arrow-div {
    display: 'inline-block';
    z-index: 1;
    right: 40px;
    top: -25px;
    position: absolute !important;
  }

  .right-arrow-div {
    display: inline-block;
    z-index: 1;
    right: 0;
    top: -25px;
    position: absolute;
  }
`;

interface StyledAboutSectionDescriptionProps {
  visibility?: boolean;
}

export const StyledAboutSectionDescription = styled.div<StyledAboutSectionDescriptionProps>`
  /* display: ${(props) => (props.visibility ? 'flex' : 'none')};; */
  display: 'flex';
  flex-direction: column;
  gap: 10px;
  /* visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')}; */
  transition: all 1s ease-in-out;
  position: relative;

  .item-title {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .item-description {
    color: ${(props) => props.theme.item_description_color};
    text-align: justify;
  }
`;

export const StyledArrowContainer = styled.span`
  width: 30px;
  height: 30px;
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

export const StyledAboutImagesContainer = styled.div<AboutSectionProps>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.isMobile ? '10px' : '40px')};

  .image-container {
    max-width: 300px;
    height: 450px;
    max-height: 450px;
    overflow-y: hidden;
  }

  .right {
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .right-pic-container {
      height: 75%;
      background-color: orange;
      border-radius: 30px;
    }

    .right-content {
      height: 20%;
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 16px;
      padding: 0 20px;
      font-family: ${(props) => props.theme.fonts.jost};
      color: ${(props) => props.theme.accent};
    }
  }

  .left {
    margin-top: 80px;
    background-color: blue;
    border-radius: 30px;
  }
`;
