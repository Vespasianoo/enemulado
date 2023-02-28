import React from "react"
import LeftSidePerfil from "../../components/LeftSidePerfil"
import img from "../../assets/img/imagem_principal_perfil.png"
import { Container, Wrapper, RightSide, Form } from "./styles"

function Perfil() {
  return (
    <Container>
      <Wrapper>
        <LeftSidePerfil />
        <RightSide>
          <h2>EDITAR PERFIL E INFORMAÇÕES</h2>
          <div>
            <Form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="CPF" />
              <input type="tel" placeholder="Telefone" />
              <div className="btn">
                <button>Atualizar</button>

                <button>Alterar senha</button>
              </div>
            </Form>
            <img src={img} alt="" />
          </div>
        </RightSide>
      </Wrapper>
    </Container>
  )
}

export default Perfil
