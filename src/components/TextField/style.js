import styled from "styled-components";

export const Div = styled.div`
  background-color: #c2b59d;
  width: 400px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  textarea {
    margin-top: 10px;
    resize: none;
    background-color: transparent;
    border: ${(props) => props.children[1].props.border};

    width: 360px;
    height: 330px;

    text-align: center;

    padding-top: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: large;

    &:focus {
      outline: 1px solid #d3cdc0;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
