import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 48px 128px;
  background-color: ${(props) => props.theme.secondaryColor};
  width: 100vw;
  font-size: 18px;

  .big-text {
    font-size: 58px;
    color: ${(props) => props.theme.primaryText};
    margin: auto;
    text-align: center;
    font-weight: 600;
    margin-bottom: 100px;

    .touch {
      color: ${(props) => props.theme.accent};
      text-decoration: underline;
    }
  }

  .footer-grid {
    display: flex;
    justify-content: space-around;
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
        margin-bottom: 30px;
        color: ${(props) => props.theme.primaryText};
      }
    }
  }

  .last-section {
    font-size: 14px;
    border-top: 0.5px solid gray;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    align-items: center;
    color: gray;

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
