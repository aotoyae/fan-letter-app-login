import LetterBtn from "components/LetterBtn";
import ToHeader from "components/ToHeader";
import Avatar from "components/common/Avatar";
import { LetterContext } from "context/LetterContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
`;

const StWrap = styled.div`
  margin: 0 auto;
  padding: 20px 30px;
  width: 65%;
  height: 45vh;

  background-color: #ffffffa8;
  border: 1px solid #000;
`;

const UserSection = styled.section`
  display: flex;
  gap: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 17px;
  text-align: left;
`;

const Btns = styled.div`
  margin-top: -20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  & button {
    width: 80px;
    height: 25px;
    cursor: pointer;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 60%;
  margin-top: 25px;
  padding: 10px;
  resize: none;
  text-align: center;

  border-top: 1px solid red;
  border-bottom: 1px solid red;
  overflow: hidden;
  text-overflow: ellipsis;
  outline-color: red;
`;

const Content = styled.p`
  height: 60%;
  margin-top: 25px;
  padding: 10px;

  border-top: 1px solid red;
  border-bottom: 1px solid red;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Detail() {
  const { letters, setLetters } = useContext(LetterContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const { nickName, createdAt, content, writedTo } = letters.find(
    (letter) => letter.id === id
  );
  const name = writedTo.charAt(0).toUpperCase() + writedTo.slice(1);

  const onEditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");

    const newLetters = letters.map((letter) => {
      return letter.id === id ? { ...letter, content: editingText } : letter;
    });

    setLetters(newLetters);
    setIsEditing(false);
    setEditingText("");
  };

  const deleteLetter = () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;

    const newLetters = letters.filter((letter) => letter.id !== id);
    navigate(`/member/${writedTo}`);
    setLetters(newLetters);
  };

  return (
    <StContainer>
      <ToHeader memberName={name} />
      <StWrap>
        <UserSection>
          <Avatar size="large" />
          <UserInfo>
            <h2>{nickName}</h2>
            <time>{createdAt}</time>
          </UserInfo>
        </UserSection>
        {isEditing ? (
          <>
            <Btns>
              <LetterBtn text="cancel" onClick={() => setIsEditing(false)} />
              <LetterBtn text="complete" onClick={onEditDone} />
            </Btns>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(e) => setEditingText(e.target.value)}
            />
          </>
        ) : (
          <>
            <Btns>
              <LetterBtn text="modify" onClick={() => setIsEditing(true)} />
              <LetterBtn text="delete" onClick={deleteLetter} />
            </Btns>
            <Content>{content}</Content>
          </>
        )}
      </StWrap>
    </StContainer>
  );
}

export default Detail;
