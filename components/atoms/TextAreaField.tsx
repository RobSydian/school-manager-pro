import { useRef } from "react";
import StyledTextAreaField from "../styles/atoms/StyledTextAreaField";
type Props = {
  type: string;
  content: string;
  name: string;
  getInputRef: (x: string, y: string) => {};
};

export default function TextAreaField({
  type,
  content,
  name,
  getInputRef,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledTextAreaField>
      <label htmlFor={name}>{content}</label>
      <textarea
        name={name}
        id={name}
        type={type}
        rows={1}
        ref={inputRef}
        onChange={() => {
          getInputRef(inputRef.current.value, name);
        }}
      />
    </StyledTextAreaField>
  );
}
