import React from "react"
import Nav from "../../components/Nav"
import img from "../../assets/img/imagem_principal_cadastro2.png"
import { Container, Wrapper } from "./styles"

const Cadastro = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <div>
          <form action="#">
            <h1>Crie sua conta, é gratis!</h1>

            <input type="text" placeholder="Nome" name="name" required />
            <input type="email" placeholder="E-mail" name="email" required />
            <input type="text" placeholder="CPF" name="cpf" required />
            <input type="number" placeholder="Telefone" name="telefone" />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              required
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              name="ConfirmPassword"
              required
            />
            <button type="submit">Criar conta</button>
          </form>
          <img src={img} alt="" />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Cadastro
