import Collapse from "../../Collapse/index";
import TextFieldComponent from "../../TextField";

const Character = () => {
  return (
    <div>
      <Collapse master={true} title={"teste"}></Collapse>
      <TextFieldComponent master={true} title={"teste"}></TextFieldComponent>
    </div>
  );
};

export default Character;
