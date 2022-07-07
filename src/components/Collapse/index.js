import { DivMain } from "./style";

const Collapse = ({ children, title }) => {
  return (
    <DivMain>
      <details>
        <summary>{title}</summary>
        {children}
      </details>
    </DivMain>
  );
};

export default Collapse;
