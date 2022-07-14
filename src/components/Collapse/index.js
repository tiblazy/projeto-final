import { useState } from "react";
import { DivMain, TextArea } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

import { useParams } from "react-router-dom";
import { baseAPI } from "../../apis/api";
import { toast } from "react-toastify";

import { getUserToken } from "../../constants/localStorages";

const Collapse = ({ children, title, master, type }) => {
  const [active, setActive] = useState(true);

  const [input, setInput] = useState("");

  const { id } = useParams();

  const toastSuccess = (message, route = null) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function handleClick(type) {
    const objeto = {};
    objeto[type] = input;
    const response = baseAPI.patch(`/tables/${id}`, objeto, {
      headers: { Authorization: `Bearer ${getUserToken}` },
    });
    toastSuccess("Mesa atualizada com sucesso");
  }

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
            <CheckIcon
              onClick={() => {
                setActive(!active);
                handleClick(type);
              }}
            ></CheckIcon>
          )}
        </div>

        <TextArea
          disabled={active}
          border={active ? "none" : "1px solid #d3cdc0"}
          onChange={(event) => setInput(event.target.value)}
          children={children}
        ></TextArea>
      </details>
    </DivMain>
  );
};

export default Collapse;
