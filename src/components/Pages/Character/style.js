import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid black;
  font-family: "Arima Madurai";

  button {
    font-family: "Arima Madurai";
    width: 100px;
  }

  h1 {
    font-family: "Merienda", cursive;
    color: #7e0902;
    font-size: 24px;
    margin-bottom: 10px;
    cursor: pointer;
    margin-left: 20px;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0px 5vw 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 17vh;
  }
`;

export const CharInfo = styled.section`
  background-color: #c2b59d;
  width: 80vw;
  height: 200px;
  padding: 20px;
  margin: 15px auto;
  display: flex;
  padding-left: 15%;
  gap: 5%;
  align-items: center;
  font-family: "Arima Madurai";

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
  }

  img {
    border-radius: 50%;
    height: 100px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CharacterContainer = styled.section`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  height: 62vh;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
