import styled from "styled-components";

export const ButtonComponent = styled.button`
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "223px"};

  font-size: 1rem;
  color: white;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: #932b2a;
  :hover {
    background-color: #7e0902;
  }
`;
