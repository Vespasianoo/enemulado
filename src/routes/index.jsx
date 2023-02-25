import React from "react"
import { BrowserRouter, Routes as Rotas, Route } from "react-router-dom"
import Cadastro from "../pages/Cadastro"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Page404 from "../pages/Page404"
import Redefinir from "../pages/Redefinir"
import Simulados from "../pages/Simulados"

import PrivateRoute from "./PrivateRoute"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Rotas>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/redefinir" element={<Redefinir />} />
          <Route
            path="/simulados"
            element={
              <PrivateRoute>
                <Simulados />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Rotas>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default Routes
