import { ButtonComponent } from "../Button/style";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useState } from "react";

const OptionsComponent = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <ButtonComponent
        onClick={() => {
          setModal(!modal);
        }}
      >
        Teste
      </ButtonComponent>
      <Rodal
        showCloseButton={false}
        animation="slideRight"
        customStyles={{
          width: "150px",
          height: "100vh",
          margin: "0 0 0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "50px 10px",
          fontSize: "1.2rem",
        }}
        visible={modal}
        onClose={() => {
          setModal(!modal);
        }}
      >
        {children}
      </Rodal>
    </div>
  );
};

export default OptionsComponent;
