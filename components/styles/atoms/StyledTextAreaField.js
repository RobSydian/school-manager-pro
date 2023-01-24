import styled from "styled-components";

const StyledTextAreaField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  width: 100%;

  textarea {
    padding: 0.1em;
  }

  @media (min-width: 821px) {
    width: 40%;

    textarea {
      max-width: 300px;
    }
  }
`;

export default StyledTextAreaField;
