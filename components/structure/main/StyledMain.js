import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 90vh;
  width: 100%;

  .container {
    padding: 0 0.5rem;
  }

  .main {
    min-height: 100vh;
    padding: 0.5em;
    background-color: var(--white-bg);
  }

  @media (min-width: 821px) {
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
