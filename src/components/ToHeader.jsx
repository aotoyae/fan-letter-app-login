import { MemberContext } from "context/MemberContext";
import { useContext } from "react";
import styled from "styled-components";

const StH1 = styled.div`
  height: 15vh;
  line-height: 15vh;
  font-size: 50px;
`;

function ToHeader() {
  const { activeMember } = useContext(MemberContext);
  const upperName = activeMember.charAt(0).toUpperCase() + activeMember.slice(1);

  return <StH1>To {upperName}</StH1>;
}

export default ToHeader;
