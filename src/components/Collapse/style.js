import styled from "styled-components";

export const DivMain = styled.div`
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

  @media screen and (min-width: 601px) {
    display: none;
  }
`;
