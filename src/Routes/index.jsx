import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Perfil from "../pages/Perfil"
import Cadastro from "../pages/Cadastro"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Page404 from "../pages/Page404"
import Redefinir from "../pages/Redefinir"
import Simulados from "../pages/Simulados"
import Dashboard from "../pages/Dashboard"
import QuemSomos from "../pages/Quemsomos"

import { PrivateRoute } from "./privateRoutes"

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quemsomos" element={<QuemSomos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir" element={<Redefinir />} />
        <Route path="/simulados" element={<PrivateRoute />}>
          <Route path="/simulados" element={<Simulados />} />
        </Route>
        <Route path="/perfil" element={<PrivateRoute />}>
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}
