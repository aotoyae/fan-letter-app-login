import Avatar from "components/common/Avatar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { __editProfile } from "store/modules/authLogin";
import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stsection = styled.section`
  width: 300px;
  padding: 30px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  border: 1px solid #000;
  background-color: #ffffffa8;

  & h1 {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid red;
  }
  & label {
    cursor: pointer;
  }
  & > label > input {
    display: none;
  }
  & input {
    height: 25px;
    padding-left: 4px;

    outline-color: red;
  }
  & h2 {
    font-size: 25px;
  }
  & button {
    width: 80px;
    height: 25px;
    cursor: pointer;
  }
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

function MyPage() {
  const dispatch = useDispatch();
  const { avatar, nickname, userId } = useSelector((state) => state.authLogin);
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const [seletedImg, setSelectedImg] = useState(avatar);
  const [file, setFile] = useState(null);

  const previewImg = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile.size > 1024 * 1024) {
      toast.warn("최대 1MB까지 업로드 가능합니다.");
    }
    setFile(imgFile);
    const imgUrl = URL.createObjectURL(imgFile);
    setSelectedImg(imgUrl);
  };

  const onEditDone = () => {
    const formData = new FormData();
    if (editingText) {
      formData.append("nickname", editingText);
    }
    if (seletedImg !== avatar) {
      formData.append("avatar", file);
    }

    dispatch(__editProfile(formData));
    setIsEditing(false);
  };

  return (
    <StContainer>
      <Stsection>
        <h1>Profile</h1>
        <label>
          <Avatar size="large" src={seletedImg} />
          <input type="file" onChange={previewImg} accept="image/*" />
        </label>
        {isEditing ? (
          <input
            autoFocus
            defaultValue={nickname}
            onChange={(e) => setEditingText(e.target.value)}
          />
        ) : (
          <h2>{nickname}</h2>
        )}
        <h3>{userId}</h3>
        {isEditing ? (
          <Btns>
            <button onClick={() => setIsEditing(false)}>cancel</button>
            <button
              onClick={onEditDone}
              disabled={!editingText && seletedImg === avatar}
            >
              complete
            </button>
          </Btns>
        ) : (
          <button onClick={() => setIsEditing(true)}>modify</button>
        )}
      </Stsection>
    </StContainer>
  );
}

export default MyPage;
