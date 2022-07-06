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

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const TextArea = styled.div`
  font-family: "Arima Madurai";
  font-size: 20px;
  text-align: center;
  color: #1b2c26;
`;

export const List = styled.div`
  font-family: "Arima Madurai";
  h2 {
    border-bottom: 1px solid black;
    width: fit-content;
  }
`;
