import styled from "styled-components";

const StyledDataActions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2;

  .deleteIcon {
    color: darkred;
    &:hover {
      color: red;
    }
  }
  .searchIcon {
    color: darkblue;
    &:hover {
      color: blue;
    }
  }
`;

export default StyledDataActions;
