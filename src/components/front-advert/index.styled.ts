import styled from "styled-components";


interface FrontAdvertContainerProps {
    isMobile: boolean
}


export const StyledFrontAdvertContainer = styled.div<FrontAdvertContainerProps>`
    max-width: 100vw;
    margin: 0;
    overflow-x: hidden;
    height: ${(props) => props.isMobile && '500px'};
    background-color: ${(props) => props.theme.secondaryColor};
    background-image: ${(props) => props.isMobile ? `url('/assets/svgs/FrontPicMobile.svg')` : ''};
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.isMobile ? '0 24px' : '0 64px'};
    position: relative;
    margin-top: ${(props) => props.isMobile ? '60px' : '60px'};
`

export const StyledFrontContent = styled.div<FrontAdvertContainerProps>`
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    justify-content: center;
    position: relative;

    div {
        font-family: ${(props) => props.theme.fonts.jost};
        font-size: ${(props) => props.isMobile ? '54px' : '98px'};
        /* line-height: 40px; */


        &.name{
            color: ${(props) => props.theme.accent}
        }
    }

    .role{
            font-family: ${(props) => props.theme.fonts.palanquin};
            font-weight: bold
    }

    .button-container{
        display: flex;
        align-items: center;
        /* line-height: 0px; */
        .right-icon{
            color: ${(props) => props.theme.accent}
        }
    }

    .three-boxes{
        position: absolute;
        top: -12%;
        left: 18%;      
    }
`

export const StyledBrandIcons = styled.div<FrontAdvertContainerProps>`
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 10px;
    /* justify-content: ${(props) => props.isMobile ? 'center' : 'flex-start'} */
`