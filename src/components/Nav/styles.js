import styled from "styled-components"

export const Container = styled.nav`
  margin-bottom: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a img {
    width: 37.7rem;
  }
  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: min(41.061rem, 100%);

    > li a {
      color: var(--text-color);
      padding: 1.5rem 3.1rem;
      border-radius: 2rem;
      font-size: 1.4rem;
      transition: filter 200ms;
    }

    > li:nth-child(3) a {
      background: var(--color-2);
      &:hover {
        filter: brightness(1.1);
      }
    }
  }

  @media (max-width: 899px) {
    > ul {
      display: none;
    }
    > a img {
      width: 18.6rem;
    }
  }
`
