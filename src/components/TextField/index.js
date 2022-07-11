import { useState } from "react";
import { Div } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const TextFieldComponent = ({ title, master }) => {
  const [active, setActive] = useState(true);

  return (
    <Div>
      <div className="header">
        <h2>{title}</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {master && <EditIcon onClick={() => setActive(!active)}></EditIcon>}
          {!active && (
            <CheckIcon onClick={() => setActive(!active)}></CheckIcon>
          )}
        </div>
      </div>

      <textarea
        disabled={active}
        border={active ? "none" : "1px solid #d3cdc0"}
      ></textarea>
    </Div>
  );
};

export default TextFieldComponent;
