import styled from "styled-components";


interface StyledCutomButtonProps {
    category: 'primary' | 'ghost' | 'default';
    loading?: boolean;
    shape: 'default' | 'circle' | 'round' | undefined;
}

export const StyledCustomButton = styled.button<StyledCutomButtonProps>`
 border-radius: ${(props) => props.shape === 'round' && '30px'};
 color: ${(props) => props.category === 'ghost' && props.theme.primaryText};
 font-size: 16px;
 font-family: ${(props) => props.theme.fonts.palanquin};
 cursor: pointer
`