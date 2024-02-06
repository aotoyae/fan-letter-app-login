import { Link } from "react-router-dom";
import styled from "styled-components";
import Tabs from "./Tabs";

const StHeader = styled.header`
  padding: 20px;
  height: 25vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Linkstyle = {
  textDecoration: "none",
  color: "#000",
  fontSize: "70px",
  fontWeight: "bold",
};

function Header() {
  return (
    <StHeader>
      <Link to={`/`} style={Linkstyle}>
        Phlake
      </Link>
      <Tabs />
    </StHeader>
  );
}

export default Header;
