import fakeData from "../shared/fakeData.json";
import styled from "styled-components";
import profile from "assets/profile.png";

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

const UserFigure = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
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

// const StInput = styled.input`
//   width: 70%;
//   height: 70px;
//   margin: 0 15px 15px 0;
//   float: left;
// `;

// const StModifyBtn = styled.button`
//   width: 25%;
//   height: 30px;
// `;

// const StDeleteBtn = styled.button`
//   width: 25%;
//   height: 30px;
//   margin-top: 10px;
// `;

function LetterList({ memberId, letters, setLetters }) {
  // console.log(fakeData);
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
            <StLi key={letter.id}>
              <UserSection>
                <UserFigure>
                  <img src={profile} alt="아바타이미지" />
                </UserFigure>
                <UserInfo>
                  <h2>{letter.nickName}</h2>
                  <time>{letter.createdAt}</time>
                </UserInfo>
              </UserSection>
              <Content>
                {/* <StInput defaultValue={letter.content} readOnly="True" /> */}
                {letter.content}
              </Content>
              {/* <StModifyBtn onClick={() => modifyLetter(letter.id)}>
                  수정하기
                </StModifyBtn>
                <StDeleteBtn onClick={() => confirmDelete(letter.id)}>
                  삭제하기
                </StDeleteBtn> */}
            </StLi>
          );
        })}
    </ul>
  );
}

export default LetterList;
