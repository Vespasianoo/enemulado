import React from "react"

import avaliacao from "./../../assets/img/avaliacao.png"
import forcas from "./../../assets/img/suasforcas.png"
import aprendizado from "./../../assets/img/aprendizado.png"

import { Container, Wrapper } from "./styles.js"

const Info = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <img src={avaliacao} alt="" />
          <h4>RÁPIDA AVALIAÇÃO</h4>
          <p>
            Onde quer que você esteja na curva de aprendizado, avalie seu nível
            de habilidade rapidamente com testes adaptativos.
          </p>
        </div>
        <div>
          <img src={forcas} alt="" />
          <h4>DESCUBRA SUAS FORÇAS</h4>
          <p>
            Descubra os tópicos em que você é excelente e concentre-se mais nos
            conceitos que você pode melhorar.
          </p>
        </div>
        <div>
          <img src={aprendizado} alt="" />

          <h4>APRENDIZADO EFETIVO</h4>
          <p>
            Use testes abrangentes criados por especialistas do setor para
            dominar as habilidades.
          </p>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Info
