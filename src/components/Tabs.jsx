import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMember } from "../store/modules/member";
import { memberData } from "shared/memberData";
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

  margin-top:10px;
  border: 1px solid red;
  width: 300px;
  height: 50px;
  cursor: pointer;
`;

function Tabs() {
  const activeMember = useSelector((state) => state.member);

  const dispatch = useDispatch();

  const onActiveMember = (e) => {
    dispatch(setMember(e.target.innerHTML));
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
