import styled from "styled-components";

const StyledHeaderItems = styled.ul`
  display: ${(props) => (props.isToggled ? "block" : "none")};

  position: absolute;
  top: 5em;
  right: 1em;
  list-style: none;
  width: 150px;

  a {
    padding: 0.5em;
    text-transform: capitalize;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    padding-right: 0;
    margin-right: 0;
  }

  @media (min-width: 821px) {
    display: ${(props) => (props.isToggled ? "flex" : "flex")};
    position: static;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;

    li a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
    }

    .settings {
      width: 50px;
    }
  }
`;

export default StyledHeaderItems;
