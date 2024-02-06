import Footer from "./Footer";
import Header from "./Header";

import styled from "styled-components";

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
      <Header />
      <StCihldren>{children}</StCihldren>
      <Footer />
    </StLayout>
  );
}

export default Layout;
