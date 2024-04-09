import { ReactElement } from 'react';
import styled from 'styled-components';

type StyledLinkProps = {
  current: boolean;
  Children?: ReactElement<any, string> | ReactElement<any, string>[];
};

export const HeaderContainer = styled.div`
  /* background-color: ${(props) => props.theme.primaryColor}; */
  display: flex;
  justify-content: space-between;
  padding: 10px 64px;
  align-items: center;
  border-bottom: ${(props) => `2px solid ${props.theme.primaryColor}`};
  z-index: 10;
  background-color: ${(props) => props.theme.secondaryColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  font-size: 18px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 600px) and (max-width: 840px) {
    gap: 10;
  }
`;

export const StyledLink = styled.div<StyledLinkProps>`
  color: ${(props) => props.theme.primaryText};
  position: relative;
  cursor: pointer;
  font-weight: ${(props) => (props.current ? 'bold' : '')};

  .link-circle {
    position: absolute;
    top: 2px;
    right: -7px;
  }
`;

export const StyledLangContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
