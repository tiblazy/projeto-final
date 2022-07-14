import styled from "styled-components";

export const MesaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  gap: 10px;
  margin-top: 10px;

  @media only screen and (min-width: 900px) {
    padding: 0px;
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-around;
    height: 62vh;
    align-items: center;
  }
`;
