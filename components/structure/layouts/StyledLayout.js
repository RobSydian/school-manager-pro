import styled from "styled-components";

const StyledLayout = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  span {
    overflow-wrap: break-word;
    padding: 0.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.17em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.83em;
  }

  h6 {
    font-size: 0.67em;
  }

  /* html {
    font-family: "Montserrat", sans-serif;
  } */
`;

export default StyledLayout;
