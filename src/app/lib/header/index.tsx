import { useRouter } from 'next/router';
import {
  HeaderContainer,
  NavLinksContainer,
  StyledLangContainer,
  StyledLink,
} from './index.styled';
import {
  LinkCircle,
  PortfolioLogoSmall,
  ThemeToggleIcon,
  VerticalBarIcon,
} from '@/_shared/assets/svgs';
import { navLinks } from '../navigation-links';
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import Image from 'next/image';

const Header = () => {
  const { pathname, push } = useRouter();
  const pathUrl = pathname?.split('/');
  const isTablet = useMediaQuery(mediaSize.tablet);

  console.log(pathUrl);

  return (
    <HeaderContainer>
      <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
        <PortfolioLogoSmall />
        <NavLinksContainer style={{ gap: isTablet ? 40 : 60 }}>
          {navLinks.map(({ label, to, href }, index) => (
            <StyledLink
              current={pathUrl[1] === to.toLowerCase()}
              key={index}
              // onClick={() => push(`/${to}`)}
              href={href}
            >
              <span>{label}</span>
              {pathUrl[1] === to.toLowerCase() && <LinkCircle className={'link-circle'} />}
            </StyledLink>
          ))}
        </NavLinksContainer>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
        {/* <StyledLink
          current={pathUrl[1] === 'events'}
          key={'events'}
          onClick={() => push(`/events`)}
        >
          <span>Upcoming events</span>
          {pathUrl[1] === 'events' && <LinkCircle className={'link-circle'} />}
        </StyledLink> */}
        <StyledLangContainer style={{ gap: 15 }}>
          <StyledLink
            current={pathUrl[1] === 'events'}
            key={'events'}
            onClick={() => push(`/events`)}
          >
            <span className="upcoming-event">
              <Image
                src={'/assets/gifs/microphone-light.gif'}
                alt="microphone"
                width={30}
                height={30}
                style={{ width: '30px', height: '30px' }}
              />
              <span style={{ color: 'var(--accent)' }}>Upcoming events</span>
            </span>
            {pathUrl[1] === 'events' && <LinkCircle className={'link-circle'} />}
          </StyledLink>{' '}
          <VerticalBarIcon />
          <ThemeToggleIcon />
        </StyledLangContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
