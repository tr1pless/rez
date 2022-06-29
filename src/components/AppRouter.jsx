import React from "react";
import { About } from "./About/About";
import { Form } from "./Form/Form";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Form />
    </>
  );
};
