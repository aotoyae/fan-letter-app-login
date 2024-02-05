import GlobalStyle from "GlobalStyle";
import Router from "shared/Router";
// import styled from "styled-components";
// import background from "assets/background.jpg";

// const StWrap = styled.div`
//   background-image: url(${background});
// `;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Router />
      </div>
    </>
  );
}

export default App;
