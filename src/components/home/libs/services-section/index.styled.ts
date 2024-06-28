import styled from 'styled-components';

interface ServiceSectionProps {
  isMobile?: boolean;
}

export const StyledServicesSectionContainer = styled.div<ServiceSectionProps>`
  padding: ${(props) => (props.isMobile ? '40px 24px' : '96px 64px')};
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  width: 100vw;
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

export const StyledServicesItemsContainer = styled.div<ServiceSectionProps>`
  width: ${(props) => (props.isMobile ? '40%' : '100%')};
  justify-content: space-between;
  gap: 40px;
  position: relative;

  .next-arrow-div {
    transition: transform 0.2s !important;
  }

  .clicked:active {
    transform: scale(0.6) translateX(-60px) !important;
  }
`;

export const StyledServicesItem = styled.div`
  padding: 40px 64px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  background-color: ${(props) => props.theme.secondaryColor};

  .icon {
    color: ${(props) => props.theme.accent};
  }

  .item-title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .item-description {
    color: ${(props) => props.theme.item_description_color};
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
