import styled from "styled-components"

// Trocar font
export const Container = styled.div`
  margin: 3.8rem auto 3.6rem auto;
  padding-inline: 2.4rem;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;

  * {
    font-family: "Inter", sans-serif;
  }
  > div {
    display: flex;
    justify-content: space-between;
    > form {
      width: min(31.2rem, 100%);
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      justify-content: center;

      > div:first-child {
        span:first-child {
          margin-bottom: 0.8rem;
        }
        span {
          display: block;
          font-size: 1.6rem;
          line-height: 2.4rem;
          color: var(--text-color-2);
          letter-spacing: -0.02em;
        }
        span:last-child {
          text-align: center;
        }
      }
      > .input-group {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        > input {
          height: 4.8rem;
          border: 1px solid var(--color-6);
          padding-left: 1.6rem;
          width: 100%;
          outline: none;
          border-radius: 0.6rem;
        }

        > .input-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4.8rem;
          border: 1px solid var(--color-6);
          border-radius: 0.6rem;
          padding-inline: 1.6rem;
          > input {
            height: 100%;
            width: 100%;
            outline: none;
          }
          > a {
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.4rem;

            letter-spacing: -0.02em;
            text-decoration-line: underline;
            color: var(--color-1);
            white-space: nowrap;
          }
        }
      }

      .btn {
        display: flex;
        flex-direction: column;
        gap: 8.6rem;

        .Criar {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--white);
          color: var(--color-1);
          border: 1px solid var(--color-1);
          width: 100%;
          height: 4.8rem;
          border-radius: 10rem;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.6rem;
          letter-spacing: -2%;
        }
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

export const Entrar = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: var(--color-1);
  color: var(--white);
  border-radius: 10rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: -2%;
`

export const GoogleLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: 100%;
  height: 4.8rem;
  border: 0.1rem solid var(--color-6);
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;

  background-color: var(--white);
  border-radius: 10rem;
  cursor: pointer;
  margin-bottom: 1.6rem;
`
