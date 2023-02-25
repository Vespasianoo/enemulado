import styled from "styled-components"

export const Container = styled.div`
  margin: 3.8rem auto 3.6rem auto;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;
  padding-inline: 2.4rem;

  div {
    display: flex;
    justify-content: space-between;
    > form {
      max-width: 312px;

      > h1 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 2.7rem;

        letter-spacing: -0.02em;
        margin-bottom: 2.4rem;
      }

      > input {
        height: 4.8rem;
        width: 100%;
        border: 1px solid var(--color-6);
        border-radius: 0.6rem;
        margin-bottom: 1.6rem;
        padding-left: 1.6rem;
        outline: none;
      }

      > button {
        height: 4.8rem;
        width: 100%;
        border-radius: 10rem;
        background-color: var(--color-1);
        color: var(--white);
        cursor: pointer;

        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.9rem;
        letter-spacing: -0.02em;
      }
    }

    img {
      @media (max-width: 899px) {
        display: none;
      }
    }

    @media (max-width: 899px) {
      justify-content: center;
      align-items: center;
    }
  }
`
