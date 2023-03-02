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

// import { AuthProvider } from "./context/auth"
// import Nav from "./components/Nav"
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir" element={<Redefinir />} />
        <Route path="/simulados" element={<Simulados />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}
