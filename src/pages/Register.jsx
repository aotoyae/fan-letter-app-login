import axios from "axios";
import { useInput } from "hooks/useInput";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StForm = styled.form`
  width: 465px;
  padding: 20px;

  border: 1px solid #000;
  background-color: #ffffffa8;

  & h2 {
    font-size: 50px;
  }
  & button {
    width: 100%;
    height: 50px;
    margin-top: 20px;

    color: #fff;
    border: none;
    background-color: #df0000;
  }
`;

const StSection = styled.section`
  display: flex;
  flex-direction: column;

  & input {
    height: 50px;
    margin-bottom: 10px;
    padding-left: 10px;

    border: none;
    border-bottom: 1px solid red;
    background-color: transparent;
    outline-color: red;
    font-size: 15px;
  }
`;

const StH3 = styled.h3`
  margin-top: 13px;
  font-size: 18px;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: red;
`;

function Register() {
  const [nickname, setNickname] = useInput();
  const [id, setId] = useInput();
  const [pwd, setPwd] = useInput();

  const numRule = /[0-9]/;
  const lowerRule = /[a-z]/;
  const allowRule = /^[a-z0-9]*$/;

  const checkNinknameInvalid = () => {
    return 10 < nickname.length || nickname.length < 1;
  };

  const checkIdInvalid = () => {
    return (
      !numRule.test(id) ||
      !lowerRule.test(id) ||
      !allowRule.test(id) ||
      10 < id.length ||
      id.length < 4
    );
  };

  const checkPwdInvalid = () => {
    return (
      !numRule.test(pwd) ||
      !lowerRule.test(pwd) ||
      !allowRule.test(pwd) ||
      15 < pwd.length ||
      pwd.length < 4
    );
  };

  const onJoin = async () => {
    axios.post("", { nickname, id, pwd });
  };

  const handleJoin = (e) => {
    e.preventDefault();

    if (checkNinknameInvalid()) {
      alert(`닉네임: 1~10자로 입력해 주세요.`);
    } else if (checkIdInvalid()) {
      alert(`아이디: 4~10자의 영문 소문자, 숫자를 입력해 주세요.`);
    } else if (checkPwdInvalid()) {
      alert(`비밀번호: 4~15자의 영문 소문자, 숫자를 입력해 주세요.`);
    } else {
      console.log("hello");
      onJoin();
    }
  };

  return (
    <StContainer>
      <StForm onSubmit={handleJoin}>
        <h2>Register</h2>
        <StSection>
          <input
            type="text"
            value={nickname}
            onChange={setNickname}
            placeholder="닉네임"
          />
          <input type="text" value={id} onChange={setId} placeholder="아이디" />
          <input
            type="password"
            value={pwd}
            onChange={setPwd}
            placeholder="비밀번호"
          />
        </StSection>
        <button type="submit">Register</button>
        <StH3>
          <StLink to={`/login`}>login</StLink>
        </StH3>
      </StForm>
    </StContainer>
  );
}

export default Register;
