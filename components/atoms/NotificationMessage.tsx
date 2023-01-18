import StyledNotificationMessage from "../styles/atoms/StyledNotificationMessage";

type Props = {
  type: string;
  message: string;
};

export default function NotificationMessage({ type, message }: Props) {
  return (
    <StyledNotificationMessage type={type}>
      <p>{message}</p>
    </StyledNotificationMessage>
  );
}
