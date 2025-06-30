import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: sans-serif;
    background-color: #f8f9fb;
    overflow-x: hidden;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;