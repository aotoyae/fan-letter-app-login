import styled from "styled-components";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addLetter } from "../store/modules/letters";
import { setMember } from "../store/modules/member";
import { useNavigate } from "react-router-dom";

const StForm = styled.form`
  height: 100%;
`;

const StSection = styled.section`
  height: 70%;

  & div {
    display: flex;
    gap: 5px;
  }
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeMember = useSelector((state) => state.member);
  const { avatar, nickname, userId } = useSelector((state) => state.authLogin);
  const [content, setContent] = useState("");

  useEffect(() => {
    navigate(`/member/${activeMember}`);
  }, [navigate, activeMember]);

  const onAddLetter = (e) => {
    e.preventDefault();

    if (!content) {
      alert("내용을 입력해 주세요.");
    } else {
      const newLetter = {
        id: uuid(),
        userId,
        nickname,
        // createdAt: new Date().toString(),
        createdAt: new Date().toLocaleDateString("ko", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        content,
        writedTo: activeMember,
      };

      dispatch(__addLetter(newLetter));
      setContent("");
    }
  };

  const handleOnInput = (e, maxlength) => {
    const {
      target: { value },
    } = e;
    if (value.length > maxlength) e.target.value = value.substr(0, maxlength);
  };

  return (
    <StForm onSubmit={onAddLetter}>
      <StSection>
        <div>
          <StLabel>닉네임</StLabel>
          <p>"{nickname}"</p>
        </div>
        <StLabel>내용</StLabel>
        <textarea
          value={content}
          onInput={(e) => handleOnInput(e, 100)}
          onChange={(e) => setContent(e.target.value)}
          placeholder="최대 100자"
        />
      </StSection>
      <StSelectSection>
        <StLabel>To </StLabel>
        <select
          defaultValue="base"
          onChange={(e) => dispatch(setMember(e.target.value))}
        >
          <option value="base" disabled>
            {activeMember}
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
