import LetterBox from "components/LetterBox";
import ToHeader from "components/ToHeader";
import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
`;

function Member() {
  return (
    <StContainer>
      <ToHeader />
      <LetterBox />
    </StContainer>
  );
}

export default Member;
