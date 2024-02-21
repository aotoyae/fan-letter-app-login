import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setMember } from "../store/modules/member";
import { memberData } from "shared/memberData";
import styled, { css } from "styled-components";
import { logout } from "store/modules/authLogin";

const StUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const MemberBtn = styled.button`
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

const StSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const UserBtn = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  user-select: none;
  cursor: pointer;
`;

function Tabs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeMember = useSelector((state) => state.member);

  const onActiveMember = (e) => {
    dispatch(setMember(e.target.innerHTML));
  };

  const onLogout = () => {
    dispatch(logout());
    navigate(`/`);
  };

  return (
    <>
      <StUl>
        {memberData.map((member) => {
          return (
            <StLink to={`/member/${member.id}`} key={member.id}>
              <MemberBtn $activeMember={activeMember} onClick={onActiveMember}>
                {member.id}
              </MemberBtn>
            </StLink>
          );
        })}
      </StUl>
      <StSection>
        <StLink to={`/mypage`}>
          <UserBtn>my page</UserBtn>
        </StLink>
        <UserBtn onClick={onLogout}>logout</UserBtn>
      </StSection>
    </>
  );
}

export default Tabs;
