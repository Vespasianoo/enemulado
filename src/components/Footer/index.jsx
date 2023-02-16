import React from "react"
import skipe from "../../assets/img/S.png"
import twitter from "../../assets/img/TWIT.png"
import linkedin from "../../assets/img/IN.png"
import instagram from "../../assets/img/INSTA.png"
import logo from "../../assets/img/imgfooter2.png"

import { Container, Wrapper } from "./styles"

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <div>
            <a href="#" target={"_blank"}>
              Quem somos
            </a>
            <a href="#" target={"_blank"}>
              Carreira
            </a>
            <a href="#" target={"_blank"}>
              A Rains
            </a>
            <a href="#" target={"_blank"}>
              Blog
            </a>
            <a href="#" target={"_blank"}>
              Contato
            </a>
          </div>

          <div>
            <a href="#" target={"_blank"} title="skipe">
              <img src={skipe} alt="Skipe" />
            </a>
            <a href="#" target={"_blank"} title="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" target={"_blank"} title="Instagram">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#" target={"_blank"} title="Twitter">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div>
          <img src={logo} alt="" />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Footer
