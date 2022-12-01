import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  html {
    color-scheme: dark light;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    font-family: Helvetica, Sans-Serif;
  }

  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }

  input,
  textarea,
  button,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
