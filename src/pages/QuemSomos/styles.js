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
`
export const Right = styled.div``
export const Bottom = styled.section`
  margin-bottom: 10.8rem;
  > h2 {
    font-weight: 300;
    font-size: 4.8rem;
    line-height: 5.6rem;
    margin-bottom: 8.2rem;
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
`
export const Person = styled.div`
  text-align: center;
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
    font-size: 20px;
    line-height: 23px;
  }
`
