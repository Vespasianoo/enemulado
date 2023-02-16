import React from "react"
import Nav from "../Nav"
import img from "../../assets/img/imagem_principal2.png"

import { Container, Wrapper } from "./styles.js"

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <div>
          <div className="title">
            <h1>
              Teste os seus conhecimentos agora mesmo com o nosso simulado do
              ENEM.
            </h1>
          </div>
          <div>
            <span>Prontos para estudar muito?</span>
            <Link to="/Login">Começar agora</Link>
          </div>
          <img src={img} alt="Mulher lendo um livro." />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Header
