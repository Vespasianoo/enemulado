import React from "react"
import Nav from "../../components/Nav"
import img from "../../assets/img/imagem_principal_redefinir.png"
import { Container, Wrapper } from "./styles"

const Redefinir = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <div>
          <form action="#" method="get">
            <h1>Redefinir sua senha</h1>

            <input type="text" placeholder="CPF" name="CPF" required />
            <input type="email" placeholder="E-mail" name="email" required />

            <button type="submit">Redefinir</button>
          </form>
          <img src={img} alt="" />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Redefinir
