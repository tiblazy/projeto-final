import { useState } from "react";
import { DivMain, TextArea } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const Collapse = ({ children, title, master }) => {
  const [active, setActive] = useState(true);

  return (
    <DivMain>
      <details>
        <summary>{title}</summary>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
            width: "320px",
          }}
        >
          {master && <EditIcon onClick={() => setActive(!active)}></EditIcon>}
          {!active && (
            <CheckIcon onClick={() => setActive(!active)}></CheckIcon>
          )}
        </div>

        <TextArea
          disabled={active}
          border={active ? "none" : "1px solid #d3cdc0"}
        >
          {children}
        </TextArea>
      </details>
    </DivMain>
  );
};

export default Collapse;
