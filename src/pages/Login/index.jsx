import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link, Navigate } from "react-router-dom"

import Nav from "../../components/Nav"
import img from "../../assets/img/imagem_principal_login2.png"
import { Container, Wrapper, GoogleLogin, Entrar } from "./styles"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, signed } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    await signIn(data)
  }
  // console.log(signed)

  if (!signed) {
    return (
      <Container>
        <Wrapper>
          <Nav />
          <div>
            <form action="#" onSubmit={handleSubmit}>
              <div>
                <span>Entrar com:</span>
                <GoogleLogin type="button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9943 0 14.0578 0 12C0 10.0101 0.483938 8.13361 1.34175 6.48131H1.34241L4.06078 6.97969L5.25159 9.68175C5.00236 10.4084 4.86652 11.1884 4.86652 12C4.86661 12.8809 5.02617 13.7249 5.31891 14.5035Z"
                      fill="#FBBB00"
                    />
                    <path
                      d="M23.7903 9.75825C23.9281 10.4842 24 11.2338 24 12C24 12.8591 23.9097 13.6972 23.7376 14.5055C23.1534 17.2563 21.627 19.6583 19.5126 21.358L19.5119 21.3574L16.088 21.1827L15.6034 18.1576C17.0064 17.3348 18.1029 16.047 18.6805 14.5055H12.2638V9.75825H18.7741H23.7903Z"
                      fill="#518EF8"
                    />
                    <path
                      d="M19.5119 21.3574L19.5125 21.358C17.4561 23.011 14.8437 24 12 24C7.43011 24 3.45694 21.4457 1.43011 17.6868L5.31891 14.5035C6.3323 17.2081 8.94132 19.1334 12 19.1334C13.3147 19.1334 14.5464 18.778 15.6033 18.1576L19.5119 21.3574Z"
                      fill="#28B446"
                    />
                    <path
                      d="M19.6596 2.76262L15.7721 5.94525C14.6783 5.26153 13.3853 4.86656 12 4.86656C8.87208 4.86656 6.21427 6.88017 5.25164 9.68175L1.34241 6.48131H1.34175C3.33891 2.63077 7.36219 0 12 0C14.9116 0 17.5813 1.03716 19.6596 2.76262Z"
                      fill="#F14336"
                    />
                  </svg>
                  Entrar com o Google
                </GoogleLogin>
                <span>ou</span>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Login"
                  required={true}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Link to="/redefinir">Esqueci minha senha</Link>
                </div>
              </div>
              <div className="btn">
                <Entrar type="submit">Entrar</Entrar>
                <Link to="/cadastro" className="Criar">
                  Criar conta
                </Link>
              </div>
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
export default Login
