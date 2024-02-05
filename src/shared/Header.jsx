import { Link } from "react-router-dom";
import styled from "styled-components";
import { memberData } from "./MemberData";

const StHeader = styled.header`
  border: 1px solid #000;
  height: 25vh;
`;

const h1Linkstyle = {
  textDecoration: "none",

  color: "#000",
  fontSize: "100px",
  fontWeight: "bold",
};

const btnLinkStyle = {
  textDecoration: "none",
};

const StBtn = styled.button`
  /* border: 1px solid
    ${(props) => (props.paramsId === props.$btnId ? "red" : "blue")}; */
  border: 1px solid red;
  width: 300px;
  height: 50px;
  cursor: pointer;
`;

function Header() {
  // const params = useParams();
  // console.log(params);
  // console.log(params.id);

  return (
    <StHeader>
      <Link to={`/`} style={h1Linkstyle}>
        Phlake
      </Link>
      <ul>
        {memberData.map((member) => {
          return (
            <Link to={`/${member.id}`} key={member.id} style={btnLinkStyle}>
              {/* <StBtn paramsId={params.id} $btnId={member.id}> */}
              <StBtn>{member.id}</StBtn>
            </Link>
          );
        })}
      </ul>
    </StHeader>
  );
}

export default Header;
