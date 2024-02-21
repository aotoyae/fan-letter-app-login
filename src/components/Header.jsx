import { Link } from "react-router-dom";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useSelector } from "react-redux";

const StHeader = styled.header`
  padding: 20px;
  height: 25vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 70px;
  font-weight: bold;
  color: #000;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
`;

const StBtn = styled.button`
  height: 70px;
  color: red;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

function Header() {
  const isLogin = useSelector((state) => state.authLogin.isLogin);

  return (
    <StHeader>
      <HomeLink to={`/`}>Phlake</HomeLink>
      {isLogin ? (
        <Tabs />
      ) : (
        <LoginLink to={`/login`}>
          <StBtn>Login</StBtn>
        </LoginLink>
      )}
    </StHeader>
  );
}

export default Header;
