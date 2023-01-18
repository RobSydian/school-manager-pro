import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import StyledLayout from "./StyledLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <StyledLayout>
      <Header />
      <ToastContainer />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  );
}
