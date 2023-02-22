import React from "react"
import img from "../../assets/img/logo.png"
import { Container } from "./styles.js"
import { Link } from "react-router-dom"

import imgPerfil from "../../assets/img/Ellipse2.png"
import userLogin from "../../services/userLogin"

const Nav = () => {
  const logado = userLogin()
  return (
    <>
      <Container>
        <Link to="/" id="logo">
          <img src={img} alt="Logo Enemulado" />
        </Link>
        <ul>
          <li>
            <Link to="/" href="index.html">
              INÍCIO
            </Link>
          </li>
          <li>
            <a href="pages/quemsomos/index.html">QUEM SOMOS</a>
          </li>
          <li>
            {logado ? <img src={imgPerfil} /> : <Link to="/login">ENTRAR</Link>}
          </li>
        </ul>
      </Container>
    </>
  )
}

export default Nav
