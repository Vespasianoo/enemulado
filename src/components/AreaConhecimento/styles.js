import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 11.9rem;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;

  h2 {
    font-weight: 300;
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 4.9rem;
  }
  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 0.8rem;
      width: 24.304rem;
      height: 15.3rem;
      padding: 1rem;
      background-color: var(--color-3);
      border-radius: 2rem;

      > img {
        filter: grayscale(1);
        width: fit-content;
        height: fit-content;
      }
      &:hover {
        background-color: var(--color-2);
        > img {
          filter: grayscale(0);
        }
      }
      /* &:nth-child(1) img {
        width: 10.5rem;
        height: 9.4rem;
      }
      &:nth-child(2) img {
        height: 9.9rem;
      }
      &:nth-child(3) img {
        width: 11.8rem;
        height: 9.6rem;
      }
      &:nth-child(4) img {
        width: 10.9rem;
        height: 10.2rem;
      } */
      > span {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 899px) {
    max-width: 41.4rem;
    /* padding-inline: 2.4rem; */
    padding-inline: 1.2rem;
    h2 {
      font-weight: 300;
      font-size: 2rem;
      line-height: 2.3rem;
      margin-bottom: 1rem;
    }
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;

      div {
        width: 100%;
        text-align: center;

        > span {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
  }
`
