import React from "react"
import img from "../../assets/img/logo.png"
import { Container } from "./styles.js"
import { Link } from "react-router-dom"

const Nav = () => {
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
            <Link to="/Login">ENTRAR</Link>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default Nav
