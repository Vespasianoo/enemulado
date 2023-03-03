import React from "react"
import { useState } from "react"
import { api } from "../../services/api"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate } from "react-router-dom"

import Nav from "../../components/Nav"
import img from "../../assets/img/imagem_principal_cadastro2.png"
import { Container, Wrapper } from "./styles"

const Cadastro = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { signed } = useContext(AuthContext)
  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      name,
      email,
      password
    }
    const response = await api.post("/create", data)
    console.log(response.data)
    if (response.data.error) {
      return alert(response.data.error)
    }
    alert("Usuário cadastrado com sucesso!")
  }
  if (!signed) {
    return (
      <Container>
        <Wrapper>
          <Nav />
          <div>
            <form onSubmit={handleSubmit}>
              <h1>Crie sua conta, é gratis!</h1>
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  name="name"
                  required={true}
                  onChange={e => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  required={true}
                />

                <input
                  type="text"
                  placeholder="CPF"
                  name="cpf"
                  required={true}
                  onChange={e => setCpf(e.target.value)}
                  readOnly={true}
                />
                <input
                  type="number"
                  placeholder="Telefone"
                  name="telefone"
                  readOnly={true}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  required={true}
                />
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  name="ConfirmPassword"
                  required={true}
                  onChange={e => setConfirmPassword(e.target.value)}
                  readOnly={true}
                />
              </div>

              <button type="submit">Criar conta</button>
            </form>
            <img src={img} alt="" />
          </div>
        </Wrapper>
      </Container>
    )
  } else {
    return <Navigate to="/dashboard" />
  }
}

export default Cadastro
