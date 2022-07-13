import { useNavigate } from "react-router-dom";
import Mesas from "../Mesas";

function Dashboard({
  privateTable,
  setIsHiddenPasswordModal,
  setTableId,
  setTablePassword,
}) {
  const navigate = useNavigate();
  return (
    <>
      {privateTable.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            console.log(item.id);
            if (item.visibility === "public") {
              navigate(`tables/${item.id}`);
            } else {
              setIsHiddenPasswordModal(true);
              setTableId(item.id);
              setTablePassword(item.password);
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

export default Dashboard;
