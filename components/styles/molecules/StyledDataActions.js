import styled from "styled-components";

const StyledDataActions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2;

  .deleteIcon {
    color: var(--red);
    &:hover {
      color: var(--red-hover);
    }
  }
  .searchIcon {
    color: var(--blue);
    &:hover {
      color: var(--blue-hover);
    }
  }
`;

export default StyledDataActions;
