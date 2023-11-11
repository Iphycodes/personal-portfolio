import styled from "styled-components";


interface SkillSectionProps {
    isMobile?: boolean;
}

export const StyledSkillSectionContainer = styled.div<SkillSectionProps>`
    min-height: 600px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.isMobile ? '60px' : '8%'};
    padding: 10px;
    background-color: ${(props) => props.theme.secondaryColor};
    flex-wrap: wrap-reverse;
   

    &::before {
  content: "";
  background-image: url('/assets/imgs/programmingcode.png');
  opacity: 0.01;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
    background-size: cover;
}

    .vertical-line {
  height: 600px;
  border: none; /* Remove the default horizontal line */
  border-left: 1px solid ${(prop) => prop.theme.primaryColor}; /* Set the width and color of the vertical line */
  /* transform: rotate(90deg); */
}
`



export const StyledTotalContainer = styled.div<SkillSectionProps>`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.jost};
    gap: 20px;

    .total{
        text-align: center;
        text-transform: uppercase;
    }

    .total-circle{
        width: ${(props) => props.isMobile ? '180px' : '200px'}; 
        height: ${(props) => props.isMobile ? '180px' : '200px'}; 
        padding: -20px;
        border-radius: 50%;
        /* border: 1px solid transparent; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        font-weight: bold;
        box-shadow: 0px 0px 50px 5px rgba(104, 110, 255, 0.15), inset 2px 8px 30px 10px rgba(104, 110, 255, 0.15);
        position: relative;

        /* &::before{
            content: "";
  position: absolute;
  width: calc(100%);
  height: calc(100%);
  border:20px solid red; 
  border-radius: 50%;
  transform: rotate(90deg); 
  transform-origin: center;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);
        }     */
    }

    .frontend{
        text-align: center;
        font-family: ${(props) => props.theme.fonts.palanquin};
        font-weight: bold;
    }
`
export const StyledSkillListContainer = styled.div<SkillSectionProps>`
    position: relative;
    width: ${(props) => props.isMobile ? '80%' : '45%'};
    

    .skill-items{
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: ${(props) => props.isMobile ? '200px' : '300px'};
    width: 100%;
    }

    .title{
        position: ${(props) => props.isMobile ? 'relative': 'absolute'};
        top: ${(props) => props.isMobile ? '' : '-100px'};
        text-align: center;
        margin-bottom: ${(props) => props.isMobile ? '20px' : ''}
    }

    .entire-line{
        height: 4px;
        width: 100%;
        border-radius: 50px;
        background-color: ${(props) => props.theme.primaryColor};

        .filled-line{
            background-color: #0019FF;
            border-radius: 50px 0 0 50px;
            height: 100%;
            z-index: 1;
            transition: all 0.9s;
        }
    }

    .skill-item{
        width: 100%;
        &:nth-child(2) .filled-line{
            background-color: #FCA311;
        }
        
        &:last-child .filled-line{
            background-color: #DB00FF;
        }
    }
`
