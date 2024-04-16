import React, {Dispatch, SetStateAction} from 'react';
import {
  StyledLinkLabel,
  StyledMobileSidebarContainer,
  StyledMobileSidebarHeader,
  StyledMobileSiderLink,
  StyledMobileSiderLinksContainer,
  StyledMobileSiderProfile,
  StyledMobileSiderProfileName,
} from './index.styled';
import { LinkCircle, PortfolioLogo } from '@/_shared/assets/svgs';
import theme from '@/styles/theme';
import { AiOutlineRight } from 'react-icons/ai';
import { navLinks } from '../navigation-links';
import { useRouter } from 'next/router';

interface MobileSidebarProps {
  toggleSidebar: boolean,
  setToogleSidebar: Dispatch<SetStateAction<boolean>>
}

const MobileSideBar = (props: MobileSidebarProps) => {
  const { toggleSidebar, setToogleSidebar } = props;
  const {push, pathname} = useRouter()
  const pathUrl = pathname.split('/')
  return (
    <StyledMobileSidebarContainer toggleSidebar={toggleSidebar}>
      <StyledMobileSidebarHeader>
        <StyledMobileSiderProfile style={{ gap: 10 }}>
          <PortfolioLogo />
          <StyledMobileSiderProfileName>
            <div>Ifeanyi O.</div>
            <div style={{ color: theme.accent, fontSize: '12px' }}>Frontend Developer</div>
          </StyledMobileSiderProfileName>
        </StyledMobileSiderProfile>
        <AiOutlineRight size={20} className="right-arrow" onClick={() => setToogleSidebar(false)}/>
      </StyledMobileSidebarHeader>
      <StyledMobileSiderLinksContainer>
        {
            navLinks.map(({label, to, icon}, idx) => {
                return (
                    <StyledMobileSiderLink key={idx} style={{gap: 20}} onClick={() => {
                        push(`/${to}`)
                        setToogleSidebar(false)
                        }}>
                        {icon}
                        <StyledLinkLabel>
                        <span>{label}</span>
                            {
                                pathUrl[1] === to.toLowerCase() && <LinkCircle className={'link-circle'}/> 
                            }
                        </StyledLinkLabel>
                        
                    </StyledMobileSiderLink>
                )   
            })
        }
      </StyledMobileSiderLinksContainer>
    </StyledMobileSidebarContainer>
  );
};

export default MobileSideBar;
