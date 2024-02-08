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

const StLink = styled(Link)`
  text-decoration: none;
  font-size: 70px;
  font-weight: bold;
  color: #000;
`;

function Header() {
  return (
    <StHeader>
      <StLink to={`/`}>Phlake</StLink>
      <Tabs />
    </StHeader>
  );
}

export default Header;
