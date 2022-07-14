import styled from "styled-components";
import Imagem from "../../../img/cadastro.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  @media (min-width: 500px) {
    background-image: url(${Imagem});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Background = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Form = styled.div`
  width: 50vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.div`
  width: 100%;
  @media (min-width: 400px) {
    width: 400px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  border-radius: 10px;

  background-color: white;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: 60vh;
  }
  span {
    font-weight: 700;
    color: #932b2a;
    cursor: pointer;
  }
  h1 {
    font-weight: 400;
    font-size: 30px;
    color: #7e0902;
    margin-bottom: 30px;
  }
  p {
    color: #7e0902;
    font-size: 13px;
    width: 100%;
  }
`;
export const A = styled.div`
  margin-top: 30px;
  width: 80vw;

  text-align: center;
`;
