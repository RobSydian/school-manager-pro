import StyledButton from "../styles/atoms/StyledButton";

type Props = {
  btnType: "button" | "submit" | "reset" | undefined;
  content: string;
  classtype: string;
  isDisabled: boolean;
  onClickFn: () => void | undefined;
};

export default function Button({
  btnType,
  content,
  classtype,
  isDisabled,
  onClickFn,
}: Props) {
  return (
    <StyledButton>
      <button
        type={btnType}
        disabled={isDisabled}
        className={classtype}
        onClick={onClickFn}
      >
        {content}
      </button>
    </StyledButton>
  );
}
