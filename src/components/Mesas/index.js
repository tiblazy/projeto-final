import { AiFillCrown } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Card } from "./style";
import exemplo1 from "../../images/exemplo1.jpg";

function Mesas({ tablename, owner, system, visibility = "Private", image, participants }) {
  return (
    <Card image={image ? image : exemplo1}>
      <section>
        <div>
          <p>{system}</p>
          <p>{visibility}</p>
        </div>
        <p>{tablename}</p>
      </section>
      <div>
        <p>
          <AiFillCrown /> {owner}
        </p>
        <p>
          <FaUserAlt /> {participants}
        </p>
      </div>
    </Card>
  );
}
export default Mesas;
