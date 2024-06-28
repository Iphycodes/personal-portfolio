import styled from 'styled-components';

interface Props {
  isDesktop: boolean;
}

export const AppLayoutContainer = styled.div`
  min-height: 100vh;
  /* position: relative; */
  overflow-x: hidden;
`;

export const AppLayoutContent = styled.div<Props>`
  width: calc(100% - 60px);
  margin-left: ${(props) => (props.isDesktop ? '60px' : 0)};
`;

export const LeftSider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: 10;
  width: 60px;
  height: 100vh;
  border-right: ${(props) => `1px solid ${props.theme.primaryColor}`};
`;
