import { useRef } from "react";
import StyledTextAreaField from "../styles/atoms/StyledTextAreaField";
type Props = {
  type: string;
  content: string;
  name: string;
  defaultValue: string;
  placeholder: string;
  getInputRef: (x: string, y: string) => {};
};

export default function TextAreaField({
  type,
  content,
  name,
  placeholder,
  defaultValue,
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
        defaultValue={defaultValue}
        rows={1}
        placeholder={placeholder}
        ref={inputRef}
        onChange={() => {
          getInputRef(inputRef.current.value, name);
        }}
      />
    </StyledTextAreaField>
  );
}
