import { PortfolioLogoSmall } from '@/_shared/assets/svgs';
import { FooterContainer, StyledSocialIcons } from './index.styled';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLine,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';

const AppFooter: React.FC = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  return (
    <FooterContainer isMobile={isMobile}>
      <div className="big-text">
        HAVE ANY PROJECT IN MIND? <br />
        GET IN <span className="touch">TOUCH</span>
      </div>

      <div className="footer-grid">
        <PortfolioLogoSmall />
        <div className="item">
          <span className="heading">OUR LOCATION</span>
          <span>Lagos, Nigeria</span>
          <span>Kaduna State</span>
        </div>
        <div className="item">
          <span className="heading">CONTACT INFO</span>
          <span>{'(+234) 9076 1413 62'}</span>
          <span>{'(+234) 8109 3628 30'}</span>
          <span>ifeanyiemmanuel585@gmail.com</span>
          <span>Monday - Saturday</span>
        </div>
      </div>

      <div className="last-section">
        <p>
          Copyright &#169; <span className="year">2024</span> by{' '}
          <span className="name">Ifeanyi Emmanuel</span>. All Rights Reserved
        </p>
        <StyledSocialIcons>
          <span className="follow-me-text">Follow Me</span>
          <AiOutlineLine className="follow-me-text" style={{ marginTop: '3px' }} />
          <span>/</span>
          <AiOutlineInstagram className="social-icon" />
          <span>/</span>
          <AiOutlineTwitter className="social-icon" />
          <span>/</span>
          <AiFillFacebook className="social-icon" />
        </StyledSocialIcons>
      </div>
    </FooterContainer>
  );
};

export default AppFooter;
