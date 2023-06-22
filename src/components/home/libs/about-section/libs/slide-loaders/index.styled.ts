import styled from "styled-components";

export const StyledSlideLoadersContainer = styled.div`
    display: flex;
    height: 4px;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 6px;

    .slide-loader-item:first-child{
        border-radius: 0 0 0 20px;
    }

    .slide-loader-item:last-child{
        border-radius: 0 20px 0 0;
    }
`
interface StyledSlideLoaderItemProps {
    width: string;
}

export const StyledSlideLoaderItem = styled.div<StyledSlideLoaderItemProps>`
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor};

    .progress{
        height: 100%;
        width: ${(props) => props.width};
        background-color: ${(props) => props.theme.accent};
        transition: all 0.1s;
    }
`

export const StyledSection = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    .play, .pause{
        cursor: pointer;
    }
`



