import React from "react"

import { Container } from "./styles"

const Simulado = ({ img, text }) => {
  return (
    <Container>
      <img src={img} alt="" />
      <span>{text}</span>
    </Container>
  )
}

export default Simulado
