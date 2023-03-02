import React from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import img from "../../assets/img/imagem_principal_quemsomos.png"
import { Container, Left, Right, Bottom, List, Time, Person } from "./styles"

function QuemSomos() {
  return (
    <>
      <Container>
        <Nav />
        <header>
          <Left>
            <h1>O QUE É O ENEMULADO</h1>
            <p>
              Somos um portal de ensino a distância com foco no ENEM. Nosso
              objetivo é oferecer ensino de alta qualidade e tecnologia de
              ponta, além de todo suporte pedagógico necessário para o seu
              sucesso.
            </p>
          </Left>
          <Right>
            <img src={img} alt="" />
          </Right>
        </header>
        <Bottom>
          <h2>MOTIVOS PARA ESTUDAR COM A GENTE</h2>

          <List>
            <li>
              1º Aqui orientaremos seus estudos através de toda programação do
              ENEM de forma sequencial, simulando o Pré-vestibular presencial,
              com a melhor relação custo x benefício.
            </li>
            <li>
              2º Simulação da prova do ENEM o que permitirá um acompanhamento
              individual para melhorar a sua preparação.
            </li>
            <li>
              3º Você terá a possibilidade de fazer uma redação por mês, que
              será corrigida e comentada. Considerando que uma redação bem feita
              vale a metade da sua prova.
            </li>
            <li>
              4º Exercícios de acompanhamento das aulas e lista de exercícios a
              cada módulo, fortalecendo ainda mais a sua preparação com correção
              ao vivo.
            </li>
          </List>
        </Bottom>
        <Time>
          <h2>NOSSO TIME</h2>

          <div>
            <Person>
              <div></div>
              <strong>Caetano Nascimento</strong>
              <span>Ensino Médio - Ouro Branco - AL</span>
            </Person>
            <Person>
              <div></div>
              <strong>Caetano Nascimento</strong>
              <span>Ensino Médio - Ouro Branco - AL</span>
            </Person>
            <Person>
              <div></div>
              <strong>Caetano Nascimento</strong>
              <span>Ensino Médio - Ouro Branco - AL</span>
            </Person>
          </div>
        </Time>
      </Container>
      <Footer />
    </>
  )
}

export default QuemSomos
