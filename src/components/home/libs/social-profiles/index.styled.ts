import styled from "styled-components";


export const StyledSocialProfileContainer = styled.div`
display: flex;
flex-direction: column;
width: 100px;
justify-content: space-between;
height: 280px;
/* background-color: blue; */
position: absolute;
top: 37%;
left: -14%;

.social-icon{
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 40px;
width: 40px;
border: 3px solid ${(props) => props.theme.primaryText};
border-radius: 50%;
position: relative;
color: ${(props) => props.theme.primaryText};

.line{
    width: 140%;
    position: absolute;
    transform: translateX(90%);
    padding: 0;
    margin: 0;
    border-color: ${(props) => props.theme.accent};
}
}

.social-icon:first-child, .social-icon:last-child{
    margin-left: 24px;

    .line{
        width: 120%;
        transform: translateX(100%);
    }
}

.social-icon:first-child{
    .line{
        transform: rotate(25deg) translateX(100%);
        width: 120%;
        top: 52%;
        /* transform: translateX(100%); */
    }
}

.social-icon:last-child{
    .line{
        transform: rotate(-25deg) translateX(100%);
        width: 120%;
        top: 48%;
        /* transform: translateX(100%); */
    }
}

`