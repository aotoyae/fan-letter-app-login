import styled from "styled-components";
import { Provider } from "react-redux";
import Header from "components/Header";
import Footer from "components/Footer";
import store from "../store/config/configStore";

const StLayout = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StCihldren = styled.div`
  border: 1px solid #000;
`;

function Layout({ children }) {
  return (
    <StLayout>
      <Provider store={store}>
        <Header />
        <StCihldren>{children}</StCihldren>
        <Footer />
      </Provider>
    </StLayout>
  );
}

export default Layout;
