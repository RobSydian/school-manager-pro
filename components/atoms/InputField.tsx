import StyledInputField from "../styles/atoms/StyledInputField";
type Props = {
  type: string;
  content: string;
  name: string;
};

export default function InputField({ type, content, name }: Props) {
  return (
    <StyledInputField>
      <label htmlFor={name}>{content}</label>
      <input name={name} id={name} type={type} />
    </StyledInputField>
  );
}
