import { useEffect, useRef } from "react";
import StyledInputField from "../styles/atoms/StyledInputField";
type Props = {
  type: string;
  content: string;
  name: string;
  defaultValue: string;
  placeholder: string;
  getInputRef: (x: string, y: string) => {};
};

export default function InputField({
  type,
  content,
  name,
  defaultValue,
  placeholder,
  getInputRef,
}: Props) {
  const inputRef = useRef("");

  return (
    <StyledInputField>
      <label htmlFor={name}>{content}</label>
      <input
        name={name}
        id={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        defaultChecked={true}
        ref={inputRef}
        onChange={() => {
          getInputRef(inputRef.current.value, name);
        }}
      />
    </StyledInputField>
  );
}
