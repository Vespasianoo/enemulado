import styled from "styled-components"

export const Container = styled.div`
  margin: 3.8rem auto 3.6rem auto;

  padding-inline: 2.4rem;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;
  div {
    display: flex;
    justify-content: space-between;
    > form {
      max-width: 312px;
      margin-top: 11.7rem;

      > h1 {
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: -0.02em;
        color: var(--text-color-2);
        margin-bottom: 2.4rem;
      }

      > input {
        width: 100%;
        height: 4.8rem;

        border: 1px solid var(--color-6);
        border-radius: 0.6rem;
        padding-left: 1.6rem;
        margin-bottom: 1.6rem;
      }

      > button {
        width: 100%;
        height: 4.8rem;
        border-radius: 10rem;
        background-color: var(--color-1);
        color: var(--white);
        font-size: 1.6rem;
        line-height: 1.9rem;
        letter-spacing: -0.02em;
        margin-top: 1.4rem;
        cursor: pointer;
      }
    }

    > img {
      @media (max-width: 899px) {
        display: none;
      }
    }
    @media (max-width: 899px) {
      align-items: center;
      justify-content: center;
    }
  }
`
