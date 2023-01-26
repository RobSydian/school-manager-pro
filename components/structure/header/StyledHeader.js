import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark);

  .logo {
    width: 15%;
    margin-left: 2em;
  }

  nav {
    max-width: 70%;
    margin-right: 2em;
  }

  @media (min-width: 821px) {
    .menu-button {
      display: none;
    }

    .logo {
      width: 10%;
      margin-left: 2em;
    }

    nav {
      max-width: 80%;
      margin-right: 2em;
    }
  }
`;

export default StyledHeader;
