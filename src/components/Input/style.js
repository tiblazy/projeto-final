import { TextField } from "@mui/material";
import styled from "styled-components";

export const InputComponent = styled(TextField)`
  width: ${(props) => props.width || "100%"};
  & .MuiInputLabel-root {
    color: #1b2c26;
    &.Mui-focused {
      color: #1b2c26;
    }
  }

  & .MuiInputBase-root {
    background-color: #d3cdc0;
    border-radius: 8px;

    & .MuiInputBase-input {
      color: #1b2c26;
    }
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #7e0902;
    }
  }

  & .MuiInputBase-root.Mui-disabled {
    background-color: rgba(211, 205, 192, 0.41);
  }

  & .MuiInputAdornment-root {
    width: 20px;
  }
`;
