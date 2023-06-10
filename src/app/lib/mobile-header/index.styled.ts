import styled from "styled-components";

interface MobileContainerProps {
    hamburgerColor?: string
}

export const StyledMobileHeaderContainer = styled.div<MobileContainerProps>`
    display: flex;
    justify-content: space-between;
    padding: 12px 14px;
    align-items: center;
    border-bottom: ${(props) => `2px solid ${props.theme.secondaryColor}`};
    background-color: ${(props) => props.theme.primaryColor };
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1
`
