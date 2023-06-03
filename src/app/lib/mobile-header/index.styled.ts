import styled from "styled-components";

interface MobileContainerProps {
    hamburgerColor?: string
}

export const StyledMobileHeaderContainer = styled.div<MobileContainerProps>`
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    align-items: center;
    border-bottom: ${(props) => `2px solid ${props.theme.secondaryColor}`};
    
    

`
