import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Page404 from "./pages/Page404"
import Redefinir from "./pages/Redefinir"
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
