import styled from 'styled-components';

interface FooterProps {
  isMobile: boolean;
}

export const FooterContainer = styled.div<FooterProps>`
  padding: ${(props) => (props.isMobile ? '24px' : '48px 128px')};
  background-color: ${(props) => props.theme.secondaryColor};
  width: 100vw;
  font-size: 18px;

  .big-text {
    font-size: 58px;
    color: ${(props) => props.theme.primaryText};
    margin: auto;
    text-align: center;
    font-weight: 600;
    margin-bottom: ${(props) => (props.isMobile ? '48px' : '100px')};

    .touch {
      color: ${(props) => props.theme.accent};
      text-decoration: underline;
    }
  }

  .footer-grid {
    display: flex;
    justify-content: space-around;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    align-items: ${(props) => (props.isMobile ? 'center' : 'flex-start')};
    text-align: ${(props) => (props.isMobile ? 'center' : 'left')};
    gap: 20px;
    padding: 40px 0;
    width: 100%;
    margin-bottom: 40px;

    .item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: gray;

      .heading {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: ${(props) => (props.isMobile ? '10px' : '30px')};
        color: ${(props) => props.theme.primaryText};
      }
    }
  }

  .last-section {
    font-size: 14px;
    border-top: 0.5px solid gray;
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    justify-content: space-between;
    padding: 10px 0px;
    align-items: center;
    color: gray;
    gap: 20px;

    .year {
      color: ${(props) => props.theme.accent};
    }
    .name {
      color: ${(props) => props.theme.primaryText};
      text-decoration: underline;
    }
  }
`;

export const StyledSocialIcons = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-style: 24px;

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
