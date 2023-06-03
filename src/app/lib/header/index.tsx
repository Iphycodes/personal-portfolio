import { useRouter } from 'next/router'
import { HeaderContainer, NavLinksContainer, StyledLangContainer, StyledLink } from './index.styled'
import { LinkCircle, PortfolioLogoSmall, ThemeToggleIcon, VerticalBarIcon} from '@/_shared/assets/svgs'
import { navLinks } from '../navigation-links'
import { mediaSize, useMediaQuery } from '@/_shared/responsiveness'



const Header = () => {
    const {pathname, push} = useRouter()
    const pathUrl = pathname?.split('/')
    const isTablet = useMediaQuery(mediaSize.tablet)

    console.log(pathUrl);


    return (
        <HeaderContainer>
            {/* <PortfolioLogo/> */}
            <PortfolioLogoSmall/>
            <NavLinksContainer style={{gap: isTablet ? 40 : 60}}>
                {
                    navLinks.map(({label, to}, index) => (
                        <StyledLink current={pathUrl[1] === to.toLowerCase()} key={index} onClick={() => push(`/${to}`)}>
                            <span>{label}</span>
                            {
                                pathUrl[1] === to.toLowerCase() && <LinkCircle className={'link-circle'}/> 
                            }
                        </StyledLink>
                    ))
                }
            </NavLinksContainer>
            <StyledLangContainer style={{gap: 15}}>
                <span style={{fontSize: '14px'}}>English</span>
                <VerticalBarIcon/>
                <ThemeToggleIcon/>
            </StyledLangContainer>  
            
            
        </HeaderContainer>
    )
}

export default Header