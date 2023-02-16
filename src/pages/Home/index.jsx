import React from "react"
import Alunados from "../../components/Alunados/index.jsx"
import AreaConhecimento from "../../components/AreaConhecimento/index.jsx"
import Determine from "../../components/Determine/index.jsx"
import Footer from "../../components/Footer/index.jsx"
import Header from "../../components/Header/index.jsx"
import Info from "../../components/Info/index.jsx"
import { Container } from "./styles.js"

const Home = () => {
  return (
    <Container>
      <Header />
      <Info />
      <AreaConhecimento />
      <Determine />
      <Alunados />
      <Footer />
    </Container>
  )
}

export default Home
