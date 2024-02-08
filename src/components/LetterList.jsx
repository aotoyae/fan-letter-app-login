import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Avatar from "./common/Avatar";

const StLi = styled.li`
  margin: 10px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;

  list-style: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.01);
  }
`;

const UserSection = styled.section`
  display: flex;
  gap: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Content = styled.p`
  padding: 10px;

  border-bottom: 1px solid red;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function LetterList({ memberId, letters, setLetters }) {
  const navigate = useNavigate();
  const confirmDelete = (id) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteLetter(id);
    } else {
      return;
    }
  };

  const deleteLetter = (id) => {
    const newLetters = letters.filter((letter) => letter.id !== id);

    setLetters(newLetters);
  };

  const modifyLetter = (id) => {
    // if (True) {
    // }
  };

  return (
    <ul>
      {letters
        .filter((letter) => letter.writedTo === memberId)
        .map((letter) => {
          return (
            <StLi
              key={letter.id}
              onClick={() => navigate(`/detail/${letter.id}`)}
            >
              <UserSection>
                <Avatar />
                <UserInfo>
                  <h2>{letter.nickName}</h2>
                  <time>{letter.createdAt}</time>
                </UserInfo>
              </UserSection>
              <Content>{letter.content}</Content>
            </StLi>
          );
        })}
    </ul>
  );
}

export default LetterList;
