import { Link } from "react-router-dom";
import styled from "styled-components";

const StFooter = styled.footer`
  height: 10vh;
`;

const StH1 = styled.h1`
  line-height: 10vh;
`;

const linkStyle = {
  textDecoration: "none",
  color: "#000",
};

function Footer() {
  return (
    <StFooter>
      <StH1>
        <Link to="https://github.com/aotoyae" target="_blank" style={linkStyle}>
          @aotoyae
        </Link>
      </StH1>
    </StFooter>
  );
}

export default Footer;
