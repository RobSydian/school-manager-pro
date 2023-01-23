import { useRef, useState } from "react";
import StyledInputField from "../styles/atoms/StyledInputField";
type Props = {
  type: string;
  content: string;
  name: string;
  getInputRef: (x: string, y: string) => {};
};

export default function InputField({
  type,
  content,
  name,
  getInputRef,
}: Props) {
  const inputRef = useRef("");

  //   const sendRefUp = () => {
  //     getInputRef(inputRef.current.value, name);
  //   };

  return (
    <StyledInputField>
      <label htmlFor={name}>{content}</label>
      <input
        name={name}
        id={name}
        type={type}
        ref={inputRef}
        onChange={() => {
          getInputRef(inputRef.current.value, name);
        }}
      />
    </StyledInputField>
  );
}
