import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Jua', 'sans-serif';
  }

  #root {
    background: linear-gradient(#6867AC, #A267AC);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  img {
    object-fit: cover;
  }
`;

export default GlobalStyle;
