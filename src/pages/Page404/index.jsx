import React from "react"
import Nav from "../../components/Nav"
import img from "../../assets/img/img-404.png"
import { Container, Wrapper } from "./styles"

const Page404 = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <div>
          <img src={img} alt="" />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Page404
