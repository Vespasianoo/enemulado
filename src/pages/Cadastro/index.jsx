import { useState } from "react"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"

import Nav from "../../components/Nav"
import img from "../../assets/img/imagem_principal_cadastro2.png"
import { Container, Wrapper } from "./styles"
import { auth } from "../../services/firebaseConfig"
import { Navigate } from "react-router-dom"

const Cadastro = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  function handleSignOut(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }
  if (loading) {
    return <p>carregando...</p>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  if (user) {
    return <Navigate to="/login" />
  }

  return (
    <Container>
      <Wrapper>
        <Nav />
        <div>
          <form action="#">
            <h1>Crie sua conta, é gratis!</h1>

            {/* <input type="text" placeholder="Nome" name="name" required /> */}
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={e => setEmail(e.target.value)}
              required
            />
            {/* <input type="text" placeholder="CPF" name="cpf" required /> */}
            {/* <input type="number" placeholder="Telefone" name="telefone" /> */}
            <input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            {/* <input
              type="password"
              placeholder="Confirmar senha"
              name="ConfirmPassword"
              required
            /> */}
            <button onClick={handleSignOut}>Criar conta</button>
          </form>
          <img src={img} alt="" />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Cadastro
