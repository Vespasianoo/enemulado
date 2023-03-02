import React from "react"
import img from "../../assets/img/logo.png"
import ImgPerfil from "../ImgPerfil"
import { Container } from "./styles.js"
import { Link } from "react-router-dom"

const Nav = () => {
  const user = false
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
          <li>{user ? <ImgPerfil /> : <Link to="/login">ENTRAR</Link>}</li>
        </ul>
      </Container>
    </>
  )
}

export default Nav
