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
    background-color: var(--green);
  }

  &&.warning {
    background-color: var(--orange);
  }

  &&.error {
    background-color: var(--red);
  }

  &&.info {
    background-color: var(--blue);
  }
`;

export default StyledNotification;
