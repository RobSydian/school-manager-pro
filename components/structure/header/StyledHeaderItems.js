import styled from "styled-components";

const StyledHeaderItems = styled.ul`
  display: ${(props) => (props.isToggled ? "block" : "none")};
  position: fixed;
  top: 5em;
  right: 0;
  list-style: none;
  width: 50%;
  z-index: 30;
  background-color: white;

  a {
    padding: 0.5em;
    /* TODO change font-size with globals */
    font-size: 20px;
    text-transform: capitalize;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    padding-right: 0;
    margin-right: 0;
    size: 20px;
  }

  @media (min-width: 821px) {
    display: ${(props) => (props.isToggled ? "flex" : "flex")};
    position: static;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    width: 100%;

    li a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 135px;
    }

    .settings {
      width: 50px;
    }
  }
`;

export default StyledHeaderItems;
