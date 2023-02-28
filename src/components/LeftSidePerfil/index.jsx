import React from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo_rodape.png"
import imgMyPerfil from "../../assets/img/perfil.png"
import imgMyDashboard from "../../assets/img/dash.png"
import sair from "../../assets/img/sair.png"
import { Container, Top, MyPerfil, MyDashboard, Bottom } from "./styles"

function LeftSidePerfil() {
  const navigate = useNavigate()
  return (
    <Container>
      <Top>
        <img src={logo} alt="Logo Enemulado" />

        <MyPerfil onClick={() => navigate("/perfil")}>
          <img src={imgMyPerfil} />
          <span>Meu perfil</span>
        </MyPerfil>
        <MyDashboard onClick={() => navigate("/dashboard")}>
          <img src={imgMyDashboard} />
          <span>DASHBOARD</span>
        </MyDashboard>
      </Top>
      <Bottom>
        <img src={sair} />
        <span>Sair</span>
      </Bottom>
    </Container>
  )
}

export default LeftSidePerfil
