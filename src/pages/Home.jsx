import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSection = styled.section`
  width: 55vw;
  padding: 20px;

  border: 1px solid #000;
  background-color: #ffffffa8;
`;

function Home() {
  return (
    <StContainer>
      <StSection>
        <h1>Welcome!</h1>
        <p>덴마크 듀오 플레이크 Phlake의 팬페이지입니다.</p>
        <p>두 아티스트에게 응원의 글을 남겨주세요.</p>
      </StSection>
    </StContainer>
  );
}

export default Home;
