import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";
import { ButtonComponent } from "../Button/style";
import { Container, Card } from "./style";
import "rodal/lib/rodal.css";

function MesaInfo({ children, personagens, participants }) {
  const [modal, setModal] = useState(false);
  const [array, setArray] = useState([]);

  const navigate = useNavigate();

  const customStyles = {
    width: "75%",
    maxWidth: "450px",
    height: "50%",
    maxHeight: "400px",
    borderRadius: "20px",
  };

  return (
    <>
      <Container>
        {children}
        <div>
          <ButtonComponent
            onClick={() => {
              setModal(!modal);
              setArray(participants);
            }}
          >
            Participantes
          </ButtonComponent>
          <ButtonComponent
            onClick={() => {
              setModal(!modal);
              setArray(personagens);
            }}
          >
            Personagens
          </ButtonComponent>
        </div>
      </Container>

      <Rodal
        customStyles={customStyles}
        visible={modal}
        onClose={() => {
          setModal(!modal);
        }}
      >
        <ul
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingTop: "10px 0px",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {array.map((elem, i) => {
            return (
              <Card
                key={i}
                onClick={() =>
                  elem.classe &&
                  navigate(`characters/${elem.name}`, { state: elem })
                }
              >
                <p>{elem.username && elem.username}</p>
                <p>{elem.name && elem.name}</p>
                <p>{elem.idade && elem.idade}</p>
                <p>{elem.classe && elem.classe}</p>
                <p>{elem.email && elem.email}</p>
              </Card>
            );
          })}
        </ul>
      </Rodal>
    </>
  );
}
export default MesaInfo;
