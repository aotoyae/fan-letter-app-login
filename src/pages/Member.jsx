import LetterBox from "components/LetterBox";
import ToHeader from "components/ToHeader";
import { useParams } from "react-router-dom";
import { memberData } from "shared/MemberData";
import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
`;

function Member() {
  const params = useParams();

  const foundData = memberData.find((member) => {
    return member.id === params.id;
  });

  const { id } = foundData;
  const { name } = foundData;

  return (
    <StContainer>
      <ToHeader memberName={name} />
      <LetterBox memberId={id} />
    </StContainer>
  );
}

export default Member;
