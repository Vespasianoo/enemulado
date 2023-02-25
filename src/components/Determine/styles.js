import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;
  margin-bottom: 12.9rem;
  display: flex;
  gap: 100px;
  position: relative;

  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
    gap: 7.8rem;
  }

  @media (max-width: 899px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 140px;
    padding-inline: 1.2rem;
  }
`

export const DetermineHabilidades = styled.div`
  width: 500px;
  height: 38.7rem;
  background-color: var(--color-5);
  border-radius: 2.5rem;
  padding: 3.7rem 4.2rem 0 4.2rem;
  @media (min-width: 900px) and (max-width: 1080px) {
    width: 400px;
  }
  > h3 {
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 2.8rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  > p {
    font-size: 1.8rem;
    font-weight: 100;
    line-height: 2.1rem;
    text-align: justify;
    margin-bottom: 2.2rem;
  }

  > img {
    width: 55rem;

    position: relative;
    left: -3.2rem;
  }
  @media (max-width: 899px) {
    max-width: 300px;
    height: 159.98px;

    padding: 0;
    > h3 {
      font-size: 1.8rem;
      margin-bottom: 11px;
      text-align: center;
      padding-top: 21px;
      padding-inline: 14px 9px;
    }
    > p {
      font-size: 1.4rem;
      font-weight: 100;
      margin: 0;
      line-height: 16px;
      padding-inline: 14px;
    }

    > img {
      width: 100%;
      left: 0;
    }
  }
`

export const Medir = styled.div`
  width: 50rem;
  height: 38.7rem;
  background-color: var(--color-5);
  border-radius: 2.5rem;
  padding: 3.7rem 4.2rem 0 4.2rem;
  margin-top: 35rem;

  @media (min-width: 900px) and (max-width: 1080px) {
    width: 400px;
  }
  > div {
    padding-top: 18rem;

    > h3 {
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 2.8rem;
      margin-bottom: 1.6rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1.8rem;
      font-weight: 100;
      line-height: 2.1rem;
      text-align: justify;
    }
  }

  > img {
    width: 52rem;

    position: absolute;

    top: -1.8rem;
    right: 0.7rem;
    @media (min-width: 900px) and (max-width: 1080px) {
      width: 50rem;
      position: absolute;
      top: 0.2rem;
      right: 2.7rem;
    }
  }

  @media (max-width: 899px) {
    max-width: 300px;
    height: 269.35px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    > div {
      padding: 127px 26px 0 41px;

      > h3 {
        font-weight: 300;
        font-size: 1.8rem;
        line-height: 21.09px;
        margin-bottom: 1.3rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 16.41px;
        padding-bottom: 58px;
      }
    }
    > img {
      width: 263px;
      top: -181px;
      right: initial;
    }
  }
`
