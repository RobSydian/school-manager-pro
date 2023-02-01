import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --primary: #68B984;
  --secondary: rgb(207, 253, 225);
  --dark: #3D5656;
  --contrast: #FED049;
  --white: white;
  --white-bg: rgb(207, 253, 225, 0.1);
  --blue: #41B6E6;
  --blue-hover: #1597DD;
  --green: #10cb61;
  --green-hover: #0d9e4b;
  --red: #ec2020;
  --red-hover: #9e0d0d;
  --orange: #ee9c0e;
  --orange-hover:#d78d0c;
  --grey: #939392;
  --grey-hover: #7a7a79;
}

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
    font-family: "Montserrat", sans-serif;

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
