import React from "react"
import Nav from "../Nav"
import img from "../../assets/img/imagem_principal2.png"

import { Container, Wrapper } from "./styles.js"

import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
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
            <button onClick={() => navigate("/login")} type="button">
              Começar agora
            </button>
          </div>
          <img src={img} alt="Mulher lendo um livro." />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Header
