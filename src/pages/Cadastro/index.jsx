import { useState } from "react"

import Nav from "../../components/Nav"
import Input from "../../components/Form/Input"
import img from "../../assets/img/imagem_principal_cadastro2.png"
import { Container, Wrapper } from "./styles"

const Cadastro = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <Container>
      <Wrapper>
        <Nav />
        <div>
          <form action="#">
            <h1>Crie sua conta, é gratis!</h1>
            <div>
              <Input
                type="text"
                placeholder="Nome"
                name="name"
                required={true}
                onChange={e => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={e => setEmail(e.target.value)}
                required={true}
              />

              <Input
                type="text"
                placeholder="CPF"
                name="cpf"
                required={true}
                onChange={e => setCpf(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Telefone"
                name="telefone"
                readOnly={true}
              />
              <Input
                type="password"
                placeholder="Senha"
                name="password"
                onChange={e => setPassword(e.target.value)}
                required={true}
              />
              <Input
                type="password"
                placeholder="Confirmar senha"
                name="ConfirmPassword"
                required={true}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit">Criar conta</button>
          </form>
          <img src={img} alt="" />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Cadastro
