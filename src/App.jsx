import React from "react"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Perfil from "./pages/Perfil"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Page404 from "./pages/Page404"
import Redefinir from "./pages/Redefinir"
import Simulados from "./pages/Simulados"
import Dashboard from "./pages/Dashboard"

import PrivateRoute from "./Routes"
import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
