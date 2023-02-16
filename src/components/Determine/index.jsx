import React from "react"
import folhas from "../../assets/img/folhas-cortada.png"
import estudos from "../../assets/img/estudo-img-cortada2.png"
import { Container, DetermineHabilidades, Medir } from "./styles"

const Determine = () => {
  return (
    <Container>
      <DetermineHabilidades>
        <h3>Determine sua habilidades</h3>
        <p>
          Obtenha uma avaliação precisa da proficiência de sua habilidade com o
          algoritmo de teste Capsnine. Ele adapta o nível de dificuldade da
          próxima pergunta com base em suas respostas anteriores.
        </p>
        <img src={folhas} alt="" />
      </DetermineHabilidades>
      <Medir>
        <img src={estudos} alt="" />
        <div>
          <h3>Medir seu sucesso</h3>
          <p>
            O painel visual detalhado permite que você acompanhe seu desempenho
            com Capsnine e identifique conceitos onde o aprendizado precisa ser
            melhorado.
          </p>
        </div>
      </Medir>
    </Container>
  )
}

export default Determine
