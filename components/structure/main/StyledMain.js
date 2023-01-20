import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 90vh;

  .container {
    padding: 0 0.5rem;
  }

  .main {
    min-height: 100vh;
    padding: 0.5em;
  }

  @media (min-width: 700px) {
    .main {
      padding: 2em;
    }

    .container {
      padding: 0 2rem;
    }
  }

  @media (prefers-color-scheme: dark) {
  }
`;
export default StyledMain;
