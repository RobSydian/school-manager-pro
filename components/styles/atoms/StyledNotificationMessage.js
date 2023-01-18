import styled from "styled-components";

const StyledNotificationMessage = styled.div`
  padding: 0.5em 0;
  p {
    color: ${({ type }) => (type === "warning" ? "black" : "white")};
  }
`;

export default StyledNotificationMessage;
