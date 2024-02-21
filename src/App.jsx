import GlobalStyle from "GlobalStyle";
import Router from "shared/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Router />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
