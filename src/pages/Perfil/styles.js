import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--white);
`
export const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 18.1rem 1fr;
`

export const RightSide = styled.div`
  margin-left: 6.4rem;
  > h2 {
    margin-block: 9.1rem 3.6rem;
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const Form = styled.form`
  width: 100%;
  max-width: 31.2rem;

  > input {
    width: 100%;
    height: 4.8rem;
    padding-left: 1.6rem;
    margin-bottom: 1.6rem;
    border-radius: 0.6rem;
    border: 0.1rem solid var(--color-6);

    &:nth-child(4) {
      margin-bottom: 5.8rem;
    }
  }

  > .btn {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    > button {
      height: 4.8rem;
      border-radius: 10rem;
      cursor: pointer;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.9rem;
      letter-spacing: -0.02em;
      color: var(--white);
      &:first-child {
        background-color: var(--color-1);
      }
      &:last-child {
        background-color: var(--white);
        border: 0.1rem solid var(--color-1);
        color: var(--color-1);
      }
    }
  }
`
