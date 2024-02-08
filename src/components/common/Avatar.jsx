import styled, { css } from "styled-components";
import profile from "assets/profile.png";

const UserFigure = styled.figure`
  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          width: 80px;
          height: 80px;
        `;
      default:
        return css`
          width: 60px;
          height: 60px;
        `;
    }
  }}

  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

function Avatar({ size }) {
  return (
    <UserFigure size={size}>
      <img src={profile} alt="아바타이미지" />
    </UserFigure>
  );
}

export default Avatar;
