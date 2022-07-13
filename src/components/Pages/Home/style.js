import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Merienda", cursive;
  color: #7e0902;
  font-size: 24px;
  margin-bottom: 10px;
  cursor: pointer;
  margin-left: 20px;

  @media only screen and (min-width: 860px) {
    font-size: 32px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid black;
  font-family: "Arima Madurai";

  nav {
    display: flex;
    justify-content: space-between;

    section {
      display: flex;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        width: 17vw;
        align-items: center;
        gap: 5px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
    }
  }

  section {
    display: none;
  }
  @media only screen and (min-width: 860px) {
    flex-direction: row;
    padding: 0px 5vw 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 17vh;

    h2 {
      cursor: pointer;
    }
    section {
      gap: 10px;
      width: 30vw;
      display: flex;
      justify-content: space-around;

      div {
        display: flex;
        flex-direction: column;
        width: 17vw;
        align-items: center;
        gap: 5px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
    }
  }
`;
export const TextArea = styled.div`
  font-family: "Arima Madurai";
  font-size: 15px;
  text-align: center;
  color: #1b2c26;
  padding: 5vw;

  hr {
    width: 222px;
  }
  @media only screen and (min-width: 860px) {
    padding: 0;
    margin-top: 10vh;
    font-size: 26px;
    hr {
      display: none;
    }
  }
`;

export const List = styled.div`
  font-family: "Arima Madurai";

  h2 {
    border-bottom: 1px solid black;
    width: fit-content;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 860px) {
    padding: 5vw;

    h2 {
      font-size: 24px;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 7vw;
    }
  }
`;
