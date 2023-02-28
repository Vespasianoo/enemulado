import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  width: 46.6rem;
  background-color: var(--color-5);
  border-radius: 2.5rem;
  > div {
    span {
      display: block;
    }

    span:first-child {
      text-align: center;
      font-size: 2.6rem;
      font-weight: 500;
      line-height: 3rem;
      margin-bottom: 0.5rem;
    }
    span:last-child {
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.3rem;
    }
  }
`

export const PerfilAluno = styled.div`
  width: 8.9rem;
  height: 8.9rem;
  border-radius: 50%;
  background-color: var(--color-4);
  margin: 0.2rem 0 0.2rem 0.7rem;
`
