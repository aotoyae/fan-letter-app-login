import styled from "styled-components";
import Header from "components/Header";
import Footer from "components/Footer";

const StLayout = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StCihldren = styled.div`
  height: 65vh;
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
