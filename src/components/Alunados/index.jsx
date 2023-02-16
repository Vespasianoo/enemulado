import React from "react"
import Aluno from "../Aluno"

import { Container, Wrapper } from "./styles"

const Alunados = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Nossos alunados</h2>
        <div>
          <div>
            <Aluno />
            <Aluno />
            <Aluno />
          </div>
          <div>
            <h5>Me salvou!</h5>
            <p>
              “Usar o ENEMULADO me salvou porque não tinha outra ferramenta que
              se encaixava tão bem com o meu perfil. Espero que muitas pessoas
              possam também encontrar esse site.”
            </p>
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Alunados
