import styled from "styled-components";

const StyledHeaderItems = styled.ul`
  display: ${(props) => (props.isToggled ? "block" : "none")};
  position: fixed;
  top: 5em;
  right: 0;
  list-style: none;
  width: 18em;
  z-index: 30;
  background-color: var(--dark);
  color: var(--white);

  a {
    margin: 1em 2em;
    /* TODO change font-size with globals */
    font-size: 20px;
    text-transform: capitalize;
    display: flex;
    justify-content: start;
    gap: 2em;
  }

  .icon {
    padding-right: 0;
    margin-right: 0;
    size: 20px;
  }
  .icon svg,
  .settings {
    color: var(--contrast);
  }

  .settings {
    display: flex;
    justify-content: center;
  }
  /* a,
  .icon {
    color: var(--white);
  } */

  @media (min-width: 821px) {
    display: ${(props) => (props.isToggled ? "flex" : "flex")};
    position: static;
    justify-content: flex-end;
    align-items: center;
    gap: 0;
    width: 100%;
    background-color: transparent;

    li a {
      display: flex;
      justify-content: center;
      align-items: center;
      /* width: 150px; */
      margin: 0 0.4em;
      /* TODO change font-size with globals */
      gap: 0.5em;
    }

    .icon {
      size: 35px;
    }

    .settings {
      width: 50px;
      /* display: block; */
    }
  }
`;

export default StyledHeaderItems;
