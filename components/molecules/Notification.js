import React from "react";
import NotificationMessage from "../atoms/NotificationMessage";
import StyledNotification from "../styles/molecules/StyledNotification";
import { GrFormClose } from "react-icons/gr";

export default function Notification({ type, message }) {
  return (
    <StyledNotification className={type}>
      <NotificationMessage type={type} message={message} />
      <GrFormClose size={30} />
    </StyledNotification>
  );
}
