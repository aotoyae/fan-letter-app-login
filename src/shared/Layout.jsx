import Footer from "./Footer";
import Header from "./Header";

import styled from "styled-components";

const StLayout = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

function Layout({ children }) {
  return (
    <StLayout>
      <Header />
      <div>{children}</div>
      <Footer />
    </StLayout>
  );
}

export default Layout;
