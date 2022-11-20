import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 90vh;

  .container {
    padding: 0 2rem;
  }

  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 600px) {
  }

  @media (prefers-color-scheme: dark) {
  }
`;
export default StyledMain;
