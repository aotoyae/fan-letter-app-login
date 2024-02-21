import { useInput } from "hooks/useInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "store/modules/AuthLogin";
import styled, { css } from "styled-components";
import { toast } from "react-toastify";

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
    margin: 5px 0;
    font-size: 50px;
  }
  & input {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    padding-left: 10px;
    display: block;

    border: none;
    border-bottom: 1px solid red;
    background-color: transparent;
    outline-color: red;
    font-size: 15px;
  }
`;

const StBtn = styled.button`
  ${(props) => {
    console.log(props.disabled);
    if (props.disabled) {
      return css`
        background-color: #a6a6a6;
      `;
    }
    return css`
      background-color: #df0000;
    `;
  }}
  width: 100%;
  height: 50px;
  margin-top: 10px;

  color: #fff;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

const Togglebox = styled.div`
  margin-top: 13px;

  & span {
    color: #656565;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nickname, setNickname] = useInput();
  const [id, setId] = useInput();
  const [pwd, setPwd, resetInput] = useInput();
  const [isLoginMode, setIsLoginMode] = useState(true);
  console.log(pwd);

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (isLoginMode) {
      if (checkIdInvalid()) {
        toast.warn(`아이디: 4~10자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else if (checkPwdInvalid()) {
        toast.warn(`비밀번호: 4~15자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else {
        dispatch(authLogin(true));
        navigate(`/`);
        toast.success(`${id}님 반갑습니다.`);
      }
    } else {
      if (checkNinknameInvalid()) {
        toast.warn(`닉네임: 1~10자로 입력해 주세요.`);
      } else if (checkIdInvalid()) {
        toast.warn(`아이디: 4~10자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else if (checkPwdInvalid()) {
        toast.warn(`비밀번호: 4~15자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else {
        dispatch(authLogin(true));
        setIsLoginMode(true);
        toast.success(`${id}님 회원가입에 성공하였습니다.`);
        resetInput();
      }
    }
  };

  return (
    <StContainer>
      <StForm onSubmit={submitHandler}>
        <h2>{isLoginMode ? "Login" : "Join"}</h2>
        {!isLoginMode && (
          <input
            type="text"
            value={nickname}
            onChange={setNickname}
            placeholder="닉네임: 1~10자로 입력해 주세요."
          />
        )}
        <input
          type="text"
          value={id}
          onChange={setId}
          placeholder="아이디: 4~10자의 영문 소문자, 숫자를 입력해 주세요."
        />
        <input
          type="password"
          value={pwd}
          onChange={setPwd}
          placeholder="비밀번호: 4~15자의 영문 소문자, 숫자를 입력해 주세요."
        />
        <StBtn
          type="submit"
          disabled={isLoginMode ? !id || !pwd : !nickname || !id || !pwd}
        >
          {isLoginMode ? "Login" : "Join"}
        </StBtn>
        <Togglebox>
          <span onClick={() => setIsLoginMode((prev) => !prev)}>
            {isLoginMode ? "Join" : "Login"}
          </span>
        </Togglebox>
      </StForm>
    </StContainer>
  );
}

export default Login;
