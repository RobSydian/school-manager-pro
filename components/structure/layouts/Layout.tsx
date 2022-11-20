import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import StyledLayout from "./StyledLayout";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  );
}
