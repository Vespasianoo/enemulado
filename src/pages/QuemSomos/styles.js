import styled from "styled-components"

export const Container = styled.div`
  margin: 3.8rem auto 3.6rem auto;

  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;

  > header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 4rem;
    margin-bottom: 4.9rem;
  }

  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
  }
  @media (max-width: 899px) {
    padding-inline: 1.5rem;
    max-width: 412px;
    > header {
      grid-template-columns: 1fr;
      gap: 2.8rem;
      margin-bottom: 7.2rem;
    }
  }
`
export const Left = styled.div`
  > h1 {
    font-weight: 300;
    font-size: 4.8rem;
    line-height: 5.6rem;
    margin-bottom: 8.2rem;
  }
  > p {
    font-weight: 100;
    font-size: 3.6rem;
    line-height: 4.2rem;
  }
  @media (min-width: 900px) and (max-width: 1080px) {
    h1 {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 899px) {
    > h1 {
      font-size: 2rem;
      line-height: 2.3rem;
      margin-bottom: 2.2rem;
    }
    > p {
      font-size: 1.8rem;
      line-height: 2.1rem;
      text-align: justify;
    }
  }
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    @media (max-width: 899px) {
      width: 263px;
    }
  }
`
export const Bottom = styled.section`
  margin-bottom: 10.8rem;
  > h2 {
    font-weight: 300;
    font-size: 4.8rem;
    line-height: 5.6rem;
    margin-bottom: 8.2rem;
  }
  @media (min-width: 900px) and (max-width: 1080px) {
    h2 {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 899px) {
    margin-bottom: 4.4rem;
    > h2 {
      font-size: 2rem;
      line-height: 2.3rem;
      text-align: center;
      margin-bottom: 2.8rem;
    }
  }
`

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  > li {
    font-weight: 100;
    font-size: 3.6rem;
    line-height: 4.2rem;
    text-align: justify;
  }
  @media (max-width: 899px) {
    gap: 2.5rem;
    > li {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }
`
export const Time = styled.div`
  padding-bottom: 2rem;
  > h2 {
    font-weight: 300;
    font-size: 4.8rem;
    line-height: 5.6rem;
    margin-bottom: 5.6rem;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 900px) and (max-width: 1080px) {
    h2 {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 899px) {
    > h2 {
      font-size: 2rem;
      line-height: 2.3rem;
    }
  }
`
export const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 36.5rem;
    height: 36.5rem;
    border-radius: 50%;
    background: gray;
    margin-bottom: 2.5rem;
  }
  > strong {
    font-size: 2.6rem;
    line-height: 3rem;
  }
  > span {
    display: block;
    font-weight: 300;
    font-size: 2rem;
    line-height: 2.3rem;
  }
  @media (max-width: 899px) {
    > div {
      width: 10rem;
      height: 10rem;
    }
    > strong {
      font-size: 10px;
      line-height: 12px;
    }
    > span {
      font-size: 8px;
      line-height: 9px;
    }
  }
`
