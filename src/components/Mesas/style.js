import styled from "styled-components";

export const Card = styled.div`
  background-color: #c2b59d;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 15px 5px 15px;
  margin-bottom: 20px;
  max-width: 400px;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    background-color: #d4c6ab;
  }

  section {
    background-image: url(${(props) => props.image});
    background-size: cover;
    height: 230px;
    width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      background-color: #d3cdc0;
      padding: 10px;
      margin: 0px;
      text-align: center;
      font-weight: bold;
    }

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: large;
  }
`;
