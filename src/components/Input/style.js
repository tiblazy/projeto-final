import { TextField } from "@mui/material";
import styled from "styled-components";

export const InputComponent = styled(TextField)`
  & .MuiInputLabel-root {
    color: #1b2c26;
    &.Mui-focused {
      color: #1b2c26;
    }
  }

  & .MuiInputBase-root {
    background-color: #d3cdc0;

    & .MuiInputBase-input {
      color: #1b2c26;
    }
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #7e0902;
    }
  }
`;
