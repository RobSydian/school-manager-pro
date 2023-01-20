import StyledInput from "../styles/atoms/StyledInput";
type Props = {
  type: string;
  content: string;
  name: string;
};

export default function InputField({ type, content, name }: Props) {
  return (
    <StyledInput>
      <label htmlFor={name}>{content}</label>
      <input name={name} id={name} type={type} />
    </StyledInput>
  );
}
