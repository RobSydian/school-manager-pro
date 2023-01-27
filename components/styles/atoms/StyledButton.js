import styled from "styled-components";

const StyledButton = styled.div`
  /* width: 100%; */

  button {
    padding: 0.5em 1em;
    border-radius: 5px;
    color: white;
    border: none;
  }

  button:disabled,
  button[disabled],
  button:disabled:hover {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  .submit {
    background-color: purple;
    &:hover {
      background-color: magenta;
    }
  }

  .update {
    background-color: var(--blue);
    &:hover {
      background-color: var(--blue-hover);
    }
  }

  .cancel {
    background-color: darkgrey;
    &:hover {
      background-color: grey;
    }
  }
`;

export default StyledButton;
