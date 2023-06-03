import { createGlobalStyle } from "styled-components";

const prefix = 'styled'


const theme = {
  primaryColor: '#1d1d1d',
  secondaryColor: '#161616',
  on_secondary: '#E9ECEF',
  primaryText: '#ffffff',
  accent: '#FCA311',
  lightBlack: '#0A0A0A',
  black: '#000000',
  tertiary: '#495057'
  
  // Other style variables
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${theme.primaryColor};
    --secondary-color: ${theme.secondaryColor};
    --accent: ${theme.accent}
    /* Other global style variables */
  }

  body{
    color: #ffffff;
    background-color: ${theme.primaryColor};
    font-family: 'Palanquin', sans-serif;
    line-height: 20px
  }

  a{
    text-decoration: none;
  }

  .pointer{
    cursor: pointer
  }
`;

export default theme;