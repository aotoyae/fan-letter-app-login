import styled from "styled-components";
import LetterList from "./LetterList";
import Form from "./Form";

const StWrap = styled.div`
  margin: 0 auto;
  padding: 20px 30px;
  width: 65%;
  height: 45vh;
  display: grid;

  grid-template-columns: 30% 70%;
  gap: 20px;

  background-color: #ffffffa8;
  border: 1px solid #000;
  justify-content: space-evenly;
`;

const StArticle = styled.article`
  padding: 8px 10px;
  overflow-x: scroll;
  text-align: left;

  border: 1px solid #000;
`;

function LetterBox() {
  return (
    <StWrap>
      <StArticle>
        <Form />
      </StArticle>
      <StArticle>
        <LetterList />
      </StArticle>
    </StWrap>
  );
}

export default LetterBox;
