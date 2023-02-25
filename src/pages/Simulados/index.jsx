import Nav from "../../components/Nav"
import Simulado from "../../components/Simulado"
import professor from "../../assets/img/colorprofessor.png"
import molequinho from "../../assets/img/colormolequinho.png"
import mundo from "../../assets/img/colormd2.png"
import livros from "../../assets/img/colorlivros.png"

import { Container, Wrapper, Main, LeftSide, SD } from "./styles"

const Simulados = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Main>
          <LeftSide>
            <h1>Simulados disponíveis</h1>

            <SD>
              <Simulado img={professor} text={"CIÊNCIAS DA NATUREZA"} />
              <Simulado img={molequinho} text={"MATEMÁTICA"} />
              <Simulado img={mundo} text={"CIÊNCIAS HUMANAS"} />
              <Simulado img={livros} text={"LINGUAGENS E CÓDIGOS"} />
            </SD>

            <div className="first">
              <h2>PRIMEIRO DIA</h2>
              <div>
                <Simulado img={mundo} text={"CIÊNCIAS HUMANAS"} />
                <Simulado img={livros} text={"LINGUAGENS E CÓDIGOS"} />
              </div>
            </div>
          </LeftSide>

          {/* <RightSide>
            <div></div>
            <div></div>
          </RightSide> */}
        </Main>
      </Wrapper>
    </Container>
  )
}

export default Simulados
