import React from "react"

import { Container } from "./styles"

function Input(props) {
  return (
    <Container>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        required={props.required}
      />
    </Container>
  )
}

export default Input
