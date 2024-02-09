import styled from "styled-components";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "../redux/modules/letters";

const StForm = styled.form`
  height: 100%;
`;

const StSection = styled.section`
  height: 70%;
  & input {
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    padding: 5px;

    border-radius: 10px;
    border: 1px solid #000;
    outline-color: red;
  }
  & textarea {
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
    padding: 5px;
    resize: none;

    border-radius: 10px;
    border: 1px solid #000;
    outline-color: red;
  }
`;

const StLabel = styled.label`
  text-align: left;
  line-height: 25px;
`;

const StSelectSection = styled.div`
  height: 15%;
  padding: 5px;
  text-align: right;
`;

const StBtn = styled.button`
  width: 100%;
  height: 35px;
`;

function Form() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState(activeMember);

  useEffect(() => {
    setMember(activeMember);
  }, [activeMember]);

  const onAddLetter = (e) => {
    e.preventDefault();

    if (!nickName) {
      alert("닉네임을 입력해 주세요.");
    } else if (!content) {
      alert("내용을 입력해 주세요.");
    } else {
      const newLetter = {
        id: uuid(),
        nickName,
        createdAt: new Date().toLocaleDateString("ko", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        content,
        writedTo: member,
      };

      dispatch(addLetter(newLetter));
      setNickName("");
      setContent("");
    }
  };

  return (
    <StForm onSubmit={onAddLetter}>
      <StSection>
        <StLabel>닉네임</StLabel>
        <input
          type="text"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          placeholder="최대 20자"
          maxLength={20}
        />
        <StLabel>내용</StLabel>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="최대 100자"
          maxLength={100}
        />
      </StSection>
      <StSelectSection>
        <StLabel>To </StLabel>
        <select defaultValue="base" onChange={(e) => setMember(e.target.value)}>
          <option value="base" disabled>
            ======
          </option>
          <option value="mads">Mads</option>
          <option value="jonathan"> Jonathan</option>
        </select>
      </StSelectSection>
      <StBtn type="submit">click</StBtn>
    </StForm>
  );
}

export default Form;
