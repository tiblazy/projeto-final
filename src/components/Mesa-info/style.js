import styled from "styled-components";

export const Container = styled.div`
  background-color: #c2b59d;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20vh;
  justify-content: space-evenly;
  font-family: "Merienda", cursive;

  section {
    justify-content: center;
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
  }
  div {
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
    button {
      width: 40vw;
    }
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    section {
      display: flex;
      flex-direction: column;
      height: 17vh;
      width: 30vw;
      text-align: center;

      h2 {
        font-size: 32px;
      }
    }
    div {
      width: 20vw;
      display: flex;
      flex-direction: column;
      height: 17vh;
      margin-left: 5vw;
      border-left: 2px black solid;
      padding-left: 10vw;

      button {
        width: 10vw;
      }
    }
  }
`;
