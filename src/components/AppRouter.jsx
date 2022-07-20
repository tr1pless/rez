import React from "react";
import { About } from "./About/About";
import { Footer } from "./Footer/Footers";
import { FormComponent } from "./Form/Form";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Skills } from "./Skills/Skills";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <FormComponent />
      <Footer />
    </>
  );
};
