import styled from 'styled-components';

interface ContactMeProps {
  isMobile?: boolean;
}

export const ContactMeContainer = styled.div<ContactMeProps>`
  max-width: 100vw;
  margin: 0;
  overflow-x: hidden;
  padding: ${(props) => (props.isMobile ? '24px' : '120px 240px')};
  display: flex;
  justify-content: center;
  gap: 200px;
`;

export const ContactMeDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  .desc-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    .image {
      width: 400px;
      height: 400px;
      /* border-radius: 50%;
      border: ${(props) => `1px solid ${props.theme.item_description_color}`}; */
    }

    .email-box {
      color: ${(props) => props.theme.primaryText};
      font-size: 24px;

      span {
        color: ${(props) => props.theme.accent};
      }
    }
  }
`;

export const ContactMeFormContainer = styled.div`
  display: flex;
  justify-content: center;

  .form-container {
    padding: 40px 60px;
    width: 600px;
    background-color: ${(props) => props.theme.secondaryColor};

    .title {
      margin-bottom: 40px;
      font-size: 60px;
      font-family: ${(props) => props.theme.fonts.jost};
      background-image: linear-gradient(to left, #ffffff 40%, #cccccc);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .ant-form-item-label label {
      color: ${(props) => props.theme.primaryText} !important;
    }

    .contact-form-button {
      width: 100%;
      height: 60px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      background-color: ${(props) => props.theme.accent};
      border-radius: 0;
      color: ${(props) => props.theme.secondaryColor};
    }

    .ant-input-affix-wrapper,
    textarea {
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      border-bottom: 0.5px solid #5b5b5b7b !important;
      color: ${(props) => props.theme.primaryText};
      padding: 20px 0px !important;

      &::placeholder {
        color: #696969;
      }

      input::placeholder {
        color: #696969;
      }
    }

    .ant-input-outlined {
      outline: 0 !important;
      box-shadow: none !important;
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
