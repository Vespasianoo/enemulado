import React from "react"
import { useNavigate } from "react-router-dom"
import LeftSidePerfil from "../../components/LeftSidePerfil"
import { Container } from "./styles"

function Dashboard() {
  const navigate = useNavigate()
  return (
    <Container>
      <LeftSidePerfil />
      <button type="button" onClick={() => navigate("/simulados")}>
        Novo simulado
      </button>
    </Container>
  )
}

export default Dashboard
