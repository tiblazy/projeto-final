import styled from "styled-components";

export const DivMain = styled.div`
  details {
    display: flex;
  }

  details p {
    padding: 10px;
  }

  details[open] {
    animation: click 0.3s ease-in-out;
  }

  summary {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 700;

    list-style: none;
    background-color: #c2b59d;
    height: 54px;
    width: 320px;
    cursor: pointer;
  }

  @keyframes click {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const TextArea = styled.textarea`
  margin: 10px 0px 0px 0px 0px;
  resize: none;
  background-color: transparent;
  border: ${(props) => props.border};

  width: 318px;
  height: 330px;

  text-align: center;

  padding: 5px 0px 0px 0px;
  font-family: "Poppins", sans-serif;

  &:focus {
    outline: 1px solid #d3cdc0;
  }
`;
