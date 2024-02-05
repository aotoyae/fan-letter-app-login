import styled from "styled-components";

const StUl = styled.ul``;

const StLi = styled.li`
  margin: 15px 0;
  list-style: none;
`;

const StH2 = styled.h2`
  clear: both;
`;

const StInput = styled.input`
  width: 70%;
  height: 70px;
  margin: 0 15px 15px 0;
  float: left;
`;

const StModifyBtn = styled.button`
  width: 25%;
  height: 30px;
`;

const StDeleteBtn = styled.button`
  width: 25%;
  height: 30px;
  margin-top: 10px;
`;

function LetterList({ memberId, letters, setLetters }) {
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
    <div>
      <StUl>
        {letters
          .filter((letter) => letter.writedTo === memberId)
          .map((letter) => {
            return (
              <StLi key={letter.id}>
                <StH2>{letter.nickName}</StH2>
                <StInput defaultValue={letter.content} readOnly="True" />
                <StModifyBtn onClick={() => modifyLetter(letter.id)}>
                  수정하기
                </StModifyBtn>
                <StDeleteBtn onClick={() => confirmDelete(letter.id)}>
                  삭제하기
                </StDeleteBtn>
              </StLi>
            );
          })}
      </StUl>
    </div>
  );
}

export default LetterList;
