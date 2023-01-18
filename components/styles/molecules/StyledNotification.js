import styled from "styled-components";

const StyledNotification = styled.div`
  padding: 0.5em 2em;
  width: 100%;
  position: absolute;
  top: 6em;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;

  &&.success {
    background-color: green;
  }

  &&.warning {
    background-color: yellow;
  }

  &&.error {
    background-color: red;
  }

  &&.info {
    background-color: blue;
  }
`;

export default StyledNotification;
