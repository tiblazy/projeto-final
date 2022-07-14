import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Merienda", cursive;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 7%;
  }
  button {
    margin: 0 auto;
    height: 50px;
    max-width: 80%;
    font-family: "Merienda", cursive;
  }

  h1 {
    color: #7e0902;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const InputContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 5px;

  input {
    padding-left: 10px;
  }
  span {
    height: 0.8rem;
    font-size: 0.8rem;
    color: red;
    font-weight: bold;
  }

  label {
  }
`;

export const CheckBoxContainer = styled.div`
  margin: 3% 0;
  margin-left: 15%;

  input {
    background-color: black;
  }

  label {
    margin-left: 8px;
  }
`;
