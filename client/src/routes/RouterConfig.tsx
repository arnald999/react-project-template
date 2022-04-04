import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { Header } from "../header/Header";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { AuthProvider } from "../context/AuthProvider";
import RequireAuth from "../component/RequireAuth";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path={'/home'} element={<Home/>} />
            <Route element={<RequireAuth allowedRoles={[1]}/>}>
            <Route path={'/about'} element={<About/>} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};
