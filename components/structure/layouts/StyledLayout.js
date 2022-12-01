import styled from "styled-components";

const StyledLayout = styled.div`
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
`;

export default StyledLayout;
