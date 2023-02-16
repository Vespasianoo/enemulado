import React from "react"
import { Link } from "react-router-dom"
import Nav from "../../components/Nav"
import img from "../../assets/img/imagem_principal_login2.png"
import { Container, Wrapper, Entrar } from "./styles"

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <div>
          <form action="#">
            <div>
              <span>Entrar com:</span>
              <button>Entrar com o Google</button>
              <span>ou</span>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Login" />
              <div className="input-box">
                <input type="password" placeholder="Senha" />
                <Link to="/redefinir">Esqueci minha senha</Link>
              </div>
            </div>
            <div className="btn">
              <Entrar type="button">Entrar</Entrar>
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
}

export default Login
