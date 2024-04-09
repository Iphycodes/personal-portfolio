import styled from 'styled-components';

interface ExperienceProps {
  isMobile?: boolean;
}

export const StyledExperienceContainer = styled.div<ExperienceProps>`
  /* background-color: red; */
  padding: ${(props) => (props.isMobile ? '40px 0' : '96px 20px')};
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  text-align: center;

  .title {
    margin-bottom: 96px;
    font-size: 60px;
    font-family: ${(props) => props.theme.fonts.jost};
    background-image: linear-gradient(to left, #ffffff 40%, #cccccc);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const StyledExperienceItemsContainer = styled.div`
  /* display: flex; */
  position: relative;
  justify-content: space-between;
  width: 100%;

  .slider {
    padding: 0 240px !important;
  }

  .current {
    background-color: ${(props) => props.theme.secondaryColor};
    box-shadow: 4px 3px 30px 0px rgba(91, 91, 91, 0.25);
  }

  .next-arrow-div {
    transition: transform 0.2s !important;
  }

  .clicked:active {
    transform: scale(0.6) translateX(-60px) !important;
  }

  .experience-item {
    padding: 40px 30px;
    min-height: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    max-width: 300px;
    /* background-color: blue; */

    .icon {
      color: ${(props) => props.theme.accent};
    }

    .item-title {
      text-transform: uppercase;
      font-size: 18px;
      line-height: 20px;
      font-weight: bold;
      /* margin-bottom: 20px; */
    }

    .item-description {
      color: ${(props) => props.theme.item_description_color};
    }

    .read-more {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: '14px';
      color: ${(props) => props.theme.accent};
    }
  }
`;

export const StyledArrowContainer = styled.span<any>`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.assets.learn_tag_color};
  color: ${(props) => props.theme.accent};
  box-shadow: 2px 3px 10px 0px rgba(0, 0, 0, 0.4);
  position: absolute;
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor};

  &:hover {
    background-color: ${(props) => props.theme.black};
  }
`;
