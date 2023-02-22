import Nav from "../../components/Nav"
import { Container, Wrapper, Main, LeftSide } from "./styles"

const Simulados = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Main>
          <LeftSide>
            <h1>Simulados disponiveis</h1>
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
