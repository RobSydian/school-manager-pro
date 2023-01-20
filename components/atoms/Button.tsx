import StyledButton from "../styles/atoms/StyledButton";

type Props = {
  content: string;
  classtype: string;
};

export default function Button({ content, classtype }: Props) {
  return (
    <StyledButton>
      <button type="button" className={classtype}>
        {content}
      </button>
    </StyledButton>
  );
}
