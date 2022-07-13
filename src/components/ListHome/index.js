import { useNavigate } from "react-router-dom";
import { currentID } from "../../constants/localStorages";
import ROUTES from "../../constants/routes";
import Mesas from "../Mesas";

function ListHome({
  tablePub,
  setIsHiddenPasswordModal,
  setTableId,
  setTablePassword,
}) {
  const navigate = useNavigate();
  return (
    <>
      {tablePub?.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            if (item.visibility === "public") {
              navigate(`tables/${item.id}`);
            } else {
              if (localStorage.getItem(currentID)) {
                setIsHiddenPasswordModal(true);
                setTableId(item.id);
                setTablePassword(item.password);
              } else {
                navigate(ROUTES.login);
              }
            }
          }}
        >
          <Mesas
            tablename={item.tablename ? item.tablename : "Mesa sem nome"}
            username={item.username ? item.username : "Sem nome do mestre"}
            system={item.system ? item.system : "NULL"}
            visibility={item.visibility}
            image={item.image}
            participants={item.participants ? item.participants.length : "NaN"}
          />
        </li>
      ))}
    </>
  );
}
export default ListHome;
