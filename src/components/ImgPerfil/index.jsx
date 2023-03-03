import React from "react"
import { useNavigate } from "react-router-dom"
import imgPerfil from "../../assets/img/Ellipse2.png"

import { Container } from "./styles"

const ImgPerfil = () => {
  const navigate = useNavigate()
  return (
    <Container onClick={() => navigate("/dashboard")}>
      <img src={imgPerfil} alt="Foto de Perfil" />
    </Container>
  )
}

export default ImgPerfil
