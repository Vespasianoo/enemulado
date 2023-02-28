import styled from "styled-components"

export const Container = styled.div`
  margin: 3.8rem auto 3.6rem auto;
  padding-bottom: 2rem;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;

  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
  }
`

export const LeftSide = styled.div`
  width: 100%;
  max-width: 54rem;
  > h1 {
    font-weight: 300;
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 4.9rem;
  }

  > .first {
    display: flex;
    flex-direction: column;
    background-color: var(--color-3);
    gap: initial;
    border-radius: 2rem;
    height: 19.7rem;

    margin-bottom: 2.8rem;

    cursor: pointer;

    &:hover {
      background: var(--color-2);
      > .simu {
        > div {
          background: var(--color-2);
        }
        img {
          filter: grayscale(0);
        }
      }
    }
    > h2 {
      text-align: center;
      font-weight: 300;
      font-size: 3rem;
      line-height: 3.5rem;
      padding-top: 0.8rem;
    }
    > .simu {
      display: grid;
      grid-template-columns: 1fr 1fr;

      div {
        background: var(--color-3);
      }
    }
  }
`

export const SD = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.2rem;
  margin-bottom: 3.2rem;

  > div {
    cursor: pointer;
    background: var(--color-3);
  }
  > div img {
    filter: grayscale(1);
  }

  > div:hover {
    background: var(--color-2);
    > img {
      filter: grayscale(0);
    }
  }
`
export const Main = styled.div``
