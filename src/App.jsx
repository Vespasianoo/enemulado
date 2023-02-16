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
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Redefinir" element={<Redefinir />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
