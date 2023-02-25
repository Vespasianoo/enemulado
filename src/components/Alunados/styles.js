import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 12.8rem;

  @media (max-width: 899px) {
    display: none;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;
  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
  }
  h2 {
    font-weight: 300;
    font-size: 3rem;
    line-height: 3.5rem;
    text-transform: uppercase;
    margin-bottom: 3.3rem;
  }

  > div {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 2.1rem;

    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    > div:last-child {
      width: 100%;
      max-width: 706px;
      padding: 2.9rem 6.8rem 6.2rem 4.5rem;
      border-radius: 0px 14.55rem 5rem;
      background-color: var(--color-4);

      > h5 {
        text-transform: uppercase;
        font-size: 3.2rem;
        line-height: 3.8rem;
        text-align: center;
        margin-bottom: 3.2rem;
      }
      > p {
        font-weight: 100;
        font-size: 2.8rem;
        line-height: 3.3rem;
        text-align: center;
      }
    }
  }
`
