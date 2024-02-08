import styled from "styled-components";

const StH1 = styled.div`
  height: 15vh;
  line-height: 15vh;
  font-size: 50px;
`;

function ToHeader({ memberName }) {
  return <StH1>To {memberName}</StH1>;
}

export default ToHeader;
