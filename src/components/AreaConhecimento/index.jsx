import React from "react"
import professor from "../../assets/img/colorprofessor.png"
import mundo from "../../assets/img/colormd2.png"
import molequinho from "../../assets/img/colormolequinho.png"
import livros from "../../assets/img/colorlivros.png"
import { Container, Wrapper } from "./styles.js"

function AreaConhecimento() {
  return (
    <Container>
      <Wrapper>
        <h2>ÁREAS DE CONHECIMENTO</h2>
        <div>
          <div>
            <img src={professor} alt="" />
            <span>CIÊNCIAS DA NATUREZA</span>
          </div>
          <div>
            <img src={mundo} alt="" />
            <span>CIÊNCIAS HUMANAS</span>
          </div>
          <div>
            <img src={molequinho} alt="" />
            <span>MATEMATICA</span>
          </div>
          <div>
            <img src={livros} alt="" />
            <span>LINGUAGENS E CÓDIGOS</span>
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default AreaConhecimento
