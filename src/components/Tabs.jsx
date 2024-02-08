import { useState } from "react";
import { Link } from "react-router-dom";
import { memberData } from "shared/MemberData";
import styled, { css } from "styled-components";

const StLink = styled(Link)`
  text-decoration: none;
`;

const StUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const StBtn = styled.button`
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background: red;
        color: #fff;
      `;
    }
  }}

  border: 1px solid red;
  width: 300px;
  height: 50px;
  cursor: pointer;
`;

function Tabs() {
  const [activeMember, setActiveMember] = useState("");

  const onActiveMember = (e) => {
    setActiveMember(e.target.innerHTML);
  };

  return (
    <StUl>
      {memberData.map((member) => {
        return (
          <StLink to={`/member/${member.id}`} key={member.id}>
            <StBtn $activeMember={activeMember} onClick={onActiveMember}>
              {member.id}
            </StBtn>
          </StLink>
        );
      })}
    </StUl>
  );
}

export default Tabs;
