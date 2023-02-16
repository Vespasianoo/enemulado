import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  max-width: 119.829rem;

  margin: 3.8rem auto 3.6rem auto;
`

export const Wrapper = styled.div`
  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
  }
  > div {
    display: grid;
    grid-template-areas:
      "a b"
      "c b";
    align-items: center;

    > .title {
      grid-area: a;
      width: 58.623rem;

      > h1 {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-size: 5.8rem;
        line-height: 7rem;
        color: var(--text-color);
      }
    }

    > div:nth-child(2) {
      align-self: flex-start;
      grid-area: c;
      display: flex;
      align-items: center;
      gap: 6.3rem;

      > span {
        font-weight: 100;
        font-size: 2rem;
        line-height: 2.3rem;
      }

      > button {
        padding-block: 2.4rem;
        width: 26.207rem;
        background: var(--color-1);
        border-radius: 2rem;

        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.3rem;
        color: var(--white);
        cursor: pointer;
      }
    }

    > img {
      grid-area: b;
      justify-self: end;
      width: 48.94rem;
    }
  }

  @media (max-width: 899px) {
    margin-top: 0;
    padding-inline: 2.4rem;

    > div {
      display: flex;
      flex-direction: column;

      .title {
        margin-bottom: 0;
        order: 1;
        width: 100%;
        max-width: 29.4rem;

        h1 {
          font-size: 3rem;
          line-height: 3.6rem;
        }
        @media (max-width: 374px) {
          h1 {
            font-size: 25px;
            text-align: center;
          }
        }
      }
      > img {
        order: 2;
        width: 100%;
        max-width: 29.6rem;
      }
      > div:nth-child(2) {
        order: 3;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.3rem;

        a {
          width: 100%;
          max-width: 30.8rem;
          padding-block: 3.2rem;
          font-size: 2.4rem;
        }
      }
    }
  }
`
