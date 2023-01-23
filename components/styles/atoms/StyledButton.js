import styled from "styled-components";

const StyledButton = styled.div`
  /* width: 100%; */

  button {
    padding: 0.5em 1em;
    border-radius: 5px;
    color: white;
    border: none;
  }

  .submit {
    background-color: purple;
  }

  .submit:hover {
    background-color: magenta;
  }
`;

export default StyledButton;
