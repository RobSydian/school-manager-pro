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
    -webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
  }

  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }

  body {
    height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    font-family: Helvetica, Sans-Serif;
  }
  body, html, #__next{
    margin:0;
    padding:0;
    min-width: 500px;

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
