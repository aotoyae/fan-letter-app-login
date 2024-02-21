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
  const [inputNickname, setInputNickname] = useInput();
  const [inputId, setInputId] = useInput();
  const [inputPwd, setInputPwd] = useInput();

  const checkNinknameInvalid = () => {
    return 10 < inputNickname.length || inputNickname.length < 1;
  };

  const onJoin = (e) => {
    e.preventDefault();

    if (checkNinknameInvalid()) {
      alert(`닉네임: 1~10자로 입력해 주세요.`);
      return;
    }

    console.log("hello");
  };

  return (
    <StContainer>
      <StForm onSubmit={onJoin}>
        <h2>Register</h2>
        <StSection>
          <input
            type="password"
            value={inputNickname}
            onChange={setInputNickname}
            placeholder="닉네임"
          />
          <input
            type="text"
            value={inputId}
            onChange={setInputId}
            placeholder="아이디"
          />
          <input
            type="password"
            value={inputPwd}
            onChange={setInputPwd}
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
