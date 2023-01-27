import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark);

  .logo {
    width: 70%;
    padding-left: 2em;
    /* background-color:  */
    background-image: linear-gradient(to right, black, var(--dark));
  }

  .logo h1 {
    font-family: "Bebas Neue", cursive;
    color: var(--white);
  }

  nav {
    max-width: 70%;
    margin-right: 2em;
  }

  .menu-button {
    color: var(--contrast);
  }

  @media (min-width: 821px) {
    .menu-button {
      display: none;
    }

    .logo {
      width: 20%;
      padding-left: 2em;
    }

    nav {
      max-width: 80%;
      margin-right: 2em;
    }
  }
`;

export default StyledHeader;
