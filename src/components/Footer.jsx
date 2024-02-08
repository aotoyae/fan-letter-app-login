import { Link } from "react-router-dom";
import styled from "styled-components";

const StFooter = styled.footer`
  height: 10vh;
`;

const StH1 = styled.h1`
  line-height: 10vh;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

function Footer() {
  return (
    <StFooter>
      <StH1>
        <StLink to="https://github.com/aotoyae/fan-letter-app" target="_blank">
          @aotoyae
        </StLink>
      </StH1>
    </StFooter>
  );
}

export default Footer;
