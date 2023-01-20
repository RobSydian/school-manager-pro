import styled from "styled-components";

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  width: 100%;

  @media (min-width: 821px) {
    width: 40%;
  }
`;

export default StyledInputField;
