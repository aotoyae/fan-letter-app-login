import LetterBtn from "components/LetterBtn";
import ToHeader from "components/ToHeader";
import Avatar from "components/common/Avatar";
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
  flex-grow: 1;
  padding-top: 17px;
  text-align: left;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  & button {
    width: 80px;
    height: 25px;
  }
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

function Detail({ letters, setLetters }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { nickName, createdAt, content, writedTo } = letters.find(
    (letter) => letter.id === id
  );

  const name = writedTo.charAt(0).toUpperCase() + writedTo.slice(1);

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
          <Btns>
            <LetterBtn text="modify" />
            <LetterBtn text="delete" onClick={deleteLetter} />
          </Btns>
        </UserSection>
        <Content>{content}</Content>
      </StWrap>
    </StContainer>
  );
}

export default Detail;
