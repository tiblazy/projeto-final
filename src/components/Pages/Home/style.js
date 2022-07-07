import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Merienda", cursive;
  color: #7e0902;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid black;
  font-family: "Arima Madurai";

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0px 5vw 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      gap: 10px;
      width: 30vw;
      display: flex;
      justify-content: space-around;
    }
  }
  @media only screen and (max-width: 600px) {
    h2 {
      display: none;
    }
    section {
      display: none;
    }
  }
`;
export const TextArea = styled.div`
  font-family: "Arima Madurai";
  font-size: 20px;
  text-align: center;
  color: #1b2c26;

  hr {
    width: 222px;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 10vh;
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
  }
  ul {
    list-style: none;
    padding: 0;
  }
  @media only screen and (min-width: 600px) {
    padding: 5vw;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 7vw;
    }
  }
`;
