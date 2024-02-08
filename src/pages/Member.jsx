import LetterBox from "components/LetterBox";
import ToHeader from "components/ToHeader";
// import { MemberContext } from "context/MemberContext";
// import { useParams } from "react-router-dom";
// import { memberData } from "shared/MemberData";
import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
`;

function Member() {
  // const params = useParams();

  // const foundData = memberData.find((member) => {
  //   return member.id === params.id;
  // });

  // const { id } = foundData;
  // const { name } = foundData;

  return (
    <StContainer>
      <ToHeader />
      <LetterBox />
    </StContainer>
  );
}

export default Member;
