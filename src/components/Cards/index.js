import { AiFillCrown } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Card } from "./style";
import exemplo1 from "../../images/exemplo1.jpg";

function Cards() {
  return (
    <Card image={exemplo1}>
      <section>
        <div>
          <p>D&D</p>
          <p>Pública</p>
        </div>
        <p>Nome da campanha</p>
      </section>
      <div>
        <p>
          <AiFillCrown /> User1
        </p>
        <p>
          <FaUserAlt /> 5
        </p>
      </div>
    </Card>
  );
}
export default Cards;
