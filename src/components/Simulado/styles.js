import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 24.3rem;
  max-height: 15.3rem;
  background: var(--color-2);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;

  > img {
    height: max-content;
    width: max-content;
    filter: grayscale(1);
  }

  > span {
    font-size: 1.8rem;
  }
`
