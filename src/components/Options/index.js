import { useState } from "react";

import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Div } from "./style";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const OptionsComponent = ({ children }) => {
  const [modal, setModal] = useState(false);

  const customStyles = {
    width: "100vw",
    height: "10vh",
    margin: "0 0 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 10px",
    fontSize: "1.2rem",
    gap: "10px",
  };

  return (
    <Div>
      <MoreHorizIcon
        onClick={() => {
          setModal(!modal);
        }}
      ></MoreHorizIcon>
      <Rodal
        showCloseButton={false}
        animation="slideRight"
        customStyles={customStyles}
        visible={modal}
        onClose={() => {
          setModal(!modal);
        }}
      >
        {children}
      </Rodal>
    </Div>
  );
};

export default OptionsComponent;
