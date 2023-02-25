import styled from "styled-components"

export const Container = styled.footer`
  background: var(--color-1);
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 119.829rem;
  margin-inline: auto;

  padding-block: 6.2rem 2.9rem;
  display: flex;
  justify-content: space-between;

  > div > div:first-child {
    display: grid;
    grid-template-columns: max-content min-content max-content;
    grid-template-areas: "a b c" "d . ." "e . .";
    gap: 2.2rem 3.2rem;
    margin-bottom: 3rem;

    a {
      font-size: 2.4rem;
      text-transform: uppercase;
      line-height: 2.8rem;
      font-weight: 400;
    }
    a:nth-child(1) {
      grid-area: a;
    }

    a:nth-child(2) {
      grid-area: b;
    }

    a:nth-child(3) {
      grid-area: c;
    }

    a:nth-child(4) {
      grid-area: d;
    }
    a:nth-child(5) {
      grid-area: e;
    }
  }
  > div > div:last-child {
    display: flex;
    gap: 1.4rem;

    a > img {
      width: min(90%, 8rem);
    }
  }
  > div:last-child {
    > img {
      width: 100%;
    }
  }
  @media (max-width: 899px) {
    /* padding-inline: 2.4rem; */
    padding-inline: 1.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div > div:first-child {
      grid-template-areas: "a b" "d c" "e .";
    }
    > div > div:last-child {
      margin-bottom: 4.3rem;
    }
  }
  @media (min-width: 900px) and (max-width: 1080px) {
    padding-inline: 2.4rem;
  }
`
