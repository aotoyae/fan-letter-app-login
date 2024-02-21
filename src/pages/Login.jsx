import { useInput } from "hooks/useInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { toast } from "react-toastify";
import { login } from "store/modules/authLogin";
import { authApi } from "api/authApi";

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
  const [password, setPassword, resetInput] = useInput();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const numRule = /[0-9]/;
  const lowerRule = /[a-z]/;
  const allowRule = /^[a-z0-9]*$/;

  const checkNicknameInvalid = () => {
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

  const checkPasswordInvalid = () => {
    return (
      !numRule.test(password) ||
      !lowerRule.test(password) ||
      !allowRule.test(password) ||
      15 < password.length ||
      password.length < 4
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      if (checkIdInvalid()) {
        toast.warn(`아이디: 4~10자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else if (checkPasswordInvalid()) {
        toast.warn(`비밀번호: 4~15자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else {
        try {
          const { data } = await authApi.post(`/login`, {
            id,
            password,
          });
          const { accessToken, avatar, nickname, userId } = data;
          if (data.success) {
            dispatch(login({accessToken, avatar, nickname, userId}));
            toast.success(`${id}님 반갑습니다.`);
            navigate(`/`);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
    } else {
      if (checkNicknameInvalid()) {
        toast.warn(`닉네임: 1~10자로 입력해 주세요.`);
      } else if (checkIdInvalid()) {
        toast.warn(`아이디: 4~10자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else if (checkPasswordInvalid()) {
        toast.warn(`비밀번호: 4~15자의 영문 소문자, 숫자를 입력해 주세요.`);
      } else {
        try {
          const { data } = await authApi.post(`/register`, {
            id,
            password,
            nickname,
          });
          if (data.success) {
            setIsLoginMode(true);
            toast.success(`${id}님 회원가입에 성공하였습니다.`);
            resetInput();
            navigate(`/login`);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
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
          value={password}
          onChange={setPassword}
          placeholder="비밀번호: 4~15자의 영문 소문자, 숫자를 입력해 주세요."
        />
        <StBtn
          type="submit"
          disabled={
            isLoginMode ? !id || !password : !nickname || !id || !password
          }
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
