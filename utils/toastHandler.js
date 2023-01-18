import { toast } from "react-toastify";

const showNotification = ({
  message,
  type = "success",
  timer = 3000,
  position = "top-center",
}) =>
  toast(message, {
    hideProgressBar: true,
    autoClose: timer,
    type: type,
    position: position,
  });

export { showNotification };
