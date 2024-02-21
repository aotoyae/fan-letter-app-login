import { useInput } from "hooks/useInput";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "store/modules/LogAuth";
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

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputId, setInputId] = useInput();
  const [inputPwd, setInputPwd] = useInput();

  const onLogin = (e) => {
    e.preventDefault();

    dispatch(authLogin(true));
    navigate(`/`);
  };

  return (
    <StContainer>
      <StForm onSubmit={onLogin}>
        <h2>Login</h2>
        <StSection>
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
        <button type="submit">Login</button>
        <StH3>
          <StLink to={`/register`}>Join</StLink>
        </StH3>
      </StForm>
    </StContainer>
  );
}

export default Login;
