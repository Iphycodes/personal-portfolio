import styled from "styled-components";

interface TimeExperienceSectionProps {
    isMobile?: boolean
}

export const StyledTimeExperienceSectionContainer = styled.div<TimeExperienceSectionProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${(props) => props.isMobile ? '0 24px' : '0 64px'};
    margin: ${(props) => props.isMobile ? '40px 0' : '64px 0'};
`

export const StyledTimeExperienceBox = styled.div<TimeExperienceSectionProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: 0 auto; */
    height: ${(props) => props.isMobile ? '240px' : '328px'};
    width: ${(props) => props.isMobile ? '40%' : '25%'};
    background-color: ${(props) => props.theme.secondaryColor};

    .year_amount{
        font-size: ${(props) => props.isMobile ? '30px' : '50px'};
        font-family: ${(props) => props.theme.fonts.palanquin};
        font-weight: bolder;
        color: ${(props) => props.theme.primaryText}   
     }

    .year_text{
        font-size: ${(props) => props.isMobile ? '22px' : '28px'};
        line-height: ${(props) => props.isMobile ? '30px' : '40px'};
        font-weight: bold;
        color: ${(props) => props.theme.tertiary};

    }
`

export const StyledTimeExperinceContent = styled.div<TimeExperienceSectionProps>`
    width: ${(props) => props.isMobile ? '50%' : '70%'};
`

export const StyledTimeExperinceContentItems = styled.div<TimeExperienceSectionProps>`
    width: '100px';
    display: flex;
    gap: 20px;
    flex-direction: column;
    line-height: ${(props) => props.isMobile ? '20px' : '25px'};
    justify-content: flex-start;
    margin-right: '30px'
`