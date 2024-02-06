import LetterBox from "components/LetterBox";
import { useParams } from "react-router-dom";
import { memberData } from "shared/MemberData";
import styled from "styled-components";

const StContainer = styled.div`
  border: 1px solid #000;
  height: 65vh;
`;

const StH1 = styled.div`
  height: 15vh;
  line-height: 15vh;
  font-size: 50px;
`;

function Member() {
  const params = useParams();

  const foundData = memberData.find((member) => {
    return member.id === params.id;
  });

  const { id } = foundData;

  return (
    <StContainer>
      <StH1>To {foundData.name}</StH1>
      <LetterBox memberId={id} />
    </StContainer>
  );
}

export default Member;
