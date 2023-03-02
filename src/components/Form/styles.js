import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  > input {
    height: 4.8rem;
    width: 100%;
    border: 1px solid var(--color-6);
    border-radius: 0.6rem;
    padding-left: 1.6rem;
    outline: none;
  }

  > input[readOnly] {
    background-color: gray;
  }
`
