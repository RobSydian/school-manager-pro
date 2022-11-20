import React from "react";
import StyledMain from "./StyledMain";

type Props = {
  children: JSX.Element;
};

export default function Main({ children }: Props) {
  return (
    <StyledMain>
      <main className="main">{children}</main>
    </StyledMain>
  );
}
