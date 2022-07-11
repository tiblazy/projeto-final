import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  label {
    margin-top: 1rem;

    display: block;

    color: black;
  }

  form {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
  }

  button {
    margin-top: 2rem;
  }
`;
