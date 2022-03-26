import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
// import Numbers from "../../numbers";
import { Header } from "../header/Header";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/home'} element={<Home/>} />
          <Route path={'/about'} element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
