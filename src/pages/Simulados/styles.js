import styled from "styled-components"

export const Container = styled.div``
export const Wrapper = styled.div``

export const LeftSide = styled.div`
  width: 100%;
  max-width: 540px;
  > h1 {
    font-weight: 300;
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 4.9rem;
  }

  > .first {
    display: flex;
    flex-direction: column;
    background-color: var(--color-2);
    gap: initial;
    border-radius: 2rem;
    height: 197px;

    margin-bottom: 28px;
    > h2 {
      text-align: center;
      font-weight: 300;
      font-size: 3rem;
      line-height: 3.5rem;
      padding-top: 8px;
    }
    > div {
      display: flex;
    }
  }
`

export const SD = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 22px;
  margin-bottom: 32px;

  > div {
    background-color: var(--color-3);
    &:hover {
      background-color: var(--color-2);
      > img {
        filter: grayscale(0);
      }
    }
  }
  > div img {
    filter: grayscale(1);
  }
`
export const Main = styled.div``
