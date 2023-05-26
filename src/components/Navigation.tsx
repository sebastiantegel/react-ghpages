import { Link } from "react-router-dom";
import { Li } from "./styled/Li";
import { Nav } from "./styled/Nav";
import { Ul } from "./styled/Ul";

export const Navigation = () => {
  return (
    <Nav>
      <Ul flex>
        <Li>
          <Link to={"/"}>Hem</Link>
        </Li>
        <Li>
          <Link to={"/golf"}>Golf</Link>
        </Li>
      </Ul>
    </Nav>
  );
};
