import styled from "styled-components"
export const Container = styled.div`
  max-width: 119.829rem;
  margin-inline: auto;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;

  margin-bottom: 7.8rem;

  > div {
    width: min(32.8rem, 100%);
    text-align: center;

    > img {
      width: 10rem;
      height: 10rem;
    }
    > h4 {
      margin-top: 2.4rem;
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 3rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    > p {
      font-weight: 100;
      font-size: 2rem;
      line-height: 2.3rem;
      text-align: justify;
    }
  }

  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    padding-inline: 2.4rem;
  }

  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
  }
`
