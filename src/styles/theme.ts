import { createGlobalStyle } from 'styled-components';

const theme = {
  primaryColor: '#1d1d1d',
  secondaryColor: '#0a0a0a',
  on_secondary: '#E9ECEF',
  on_tertiary: '#DEE2E6',
  primaryText: '#F8F9FA',
  // accent: '#FCA311',
  accent: '#BAE935',
  lightBlack: '#0A0A0A',
  black: '#000000',
  tertiary: '#495057',
  item_description_color: '#cccccc',
  fonts: {
    jost: `'Jost', sans-serif`,
    palanquin: `'Palanquin', sans-serif`,
    redditMono: `'Reddit Mono', sans-serif`,
  },
  assets: {
    learn_tag_color: '#1d1d1d',
  },
  shadows: {
    light_grey_shadow: '2px, 3px rgba(0, 0, 0, 0.4)',
  },

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
    /* line-height: 30px */
  }

  a{
    text-decoration: none;
  }

  .pointer{
    cursor: pointer
  }

  .title{
        font-size: 60px;
        font-family: ${theme.fonts.jost};
        background-image: linear-gradient(to left, #ffffff 40%, #cccccc);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
`;

export default theme;
