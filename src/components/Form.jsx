import styled from "styled-components";
import uuid from "react-uuid";
import { useContext, useState } from "react";
import { MemberContext } from "shared/MemberContext";
import { LetterContext } from "shared/LetterContext";

const StForm = styled.form`
  height: 100%;
`;

const StSection = styled.section`
  height: 80%;
`;

const StP = styled.p`
  text-align: left;
  height: 25px;
`;

const StInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;

  border-radius: 10px;
  border: 1px solid #000;
`;

const StBtn = styled.button`
  width: 100%;
  height: 30px;
`;

function Form() {
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");

  const memberData = useContext(MemberContext);
  const letterData = useContext(LetterContext);
  console.log("hi");

  const addLetter = (e) => {
    e.preventDefault();

    if (!nickName) {
      alert("닉네임을 입력해 주세요.");
    } else if (!content) {
      alert("내용을 입력해 주세요.");
    } else {
      const newLetter = {
        id: uuid(),
        nickName,
        content,
        writedTo: memberData.memberId,
      };

      letterData.setLetters([...letterData.letters, newLetter]);
      setNickName("");
      setContent("");
    }
  };

  return (
    <StForm onSubmit={addLetter}>
      <StSection>
        <StP>닉네임</StP>
        <StInput
          type="text"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <StP>내용</StP>
        <StInput
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </StSection>
      <StBtn type="submit">click</StBtn>
    </StForm>
  );
}

export default Form;
