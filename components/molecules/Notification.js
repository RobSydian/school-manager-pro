import React from "react";
import NotificationMessage from "../atoms/NotificationMessage";
import StyledNotification from "../styles/molecules/StyledNotification";

export default function Notification({ type, message }) {
  return (
    <StyledNotification className={type}>
      <NotificationMessage type={type} message={message} />
    </StyledNotification>
  );
}
