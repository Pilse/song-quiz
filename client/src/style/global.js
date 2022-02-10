import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Jua', 'sans-serif';
    background: linear-gradient(#6867AC, #A267AC);
  }

  #root {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  input {
    font-family: inherit;
  }

  img {
    object-fit: cover;
  }

  p {
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
