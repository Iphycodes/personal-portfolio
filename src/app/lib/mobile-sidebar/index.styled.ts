import styled from "styled-components";


interface StyledMobileSidebarContainerProps {
    toggleSidebar: boolean;
}

export const StyledMobileSidebarContainer = styled.div<StyledMobileSidebarContainerProps>`
    width: 75%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.lightBlack};
    transform: ${(props) => props.toggleSidebar ? 'translateX(0%)' : 'translateX(-100%)' } ;
    transition: all 0.4s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    z-index: 10;
`

export const StyledMobileSidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px;
    border-bottom: ${(props) => `1px solid ${props.theme.tertiary}`};

    .right-arrow{
        color: ${(props) => props.theme.on_secondary};
        cursor: pointer;

        &:hover{
            color: ${(props) => props.theme.accent};
        }
    }

`

export const StyledMobileSiderProfile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10;

    
`
export const StyledMobileSiderProfileName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2;
`

export const StyledMobileSiderLinksContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
`
export const StyledMobileSiderLink = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 24px;
    cursor: pointer;
    /* border-bottom: 0.5px solid ${(props) => props.theme.tertiary}; */

    &:hover{
        background-color: ${(props) => props.theme.black};
    }
`
interface StyledLinkLabelProps {
    current?: boolean
}

export const StyledLinkLabel = styled.div<StyledLinkLabelProps>`
    color: ${(props) => props.theme.primaryText};
    position: relative;
    cursor: pointer;
    font-weight: ${(props) => props.current ? 'bold' : ''};

    .link-circle{
        position: absolute;
        top: -3px;
        right: -8px;
    }
`




