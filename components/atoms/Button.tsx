import StyledButton from "../styles/atoms/StyledButton";

type Props = {
  btnType: "button" | "submit" | "reset" | undefined;
  content: string;
  classtype: string;
};

export default function Button({ btnType, content, classtype }: Props) {
  return (
    <StyledButton>
      <button type={btnType} className={classtype}>
        {content}
      </button>
    </StyledButton>
  );
}
