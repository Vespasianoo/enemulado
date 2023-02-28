import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  padding-left: 1.8rem;
  width: 18.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
  background-color: var(--color-1);
  position: relative;
`

export const Top = styled.div`
  > img {
    //centraliza
    /* margin-inline: auto; */
    text-align: center;
    width: 12rem;
    margin-block: 9.1rem 3.2rem;
    margin: 9.1rem 0 3.2rem 1.4rem;
  }
`
export const MyPerfil = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5rem;
  cursor: pointer;
  > span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;

    color: var(--white);
  }
`

export const MyDashboard = styled(MyPerfil)``

export const Bottom = styled(MyPerfil)`
  width: 100%;
`
