import { MemberContext } from "context/MemberContext";
import Footer from "./Footer";
import Header from "./Header";

import styled from "styled-components";
import { useState } from "react";

const StLayout = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StCihldren = styled.div`
  border: 1px solid #000;
`;

function Layout({ children }) {
  const [activeMember, setActiveMember] = useState("");

  return (
    <StLayout>
      <MemberContext.Provider value={{ activeMember, setActiveMember }}>
        <Header />
        <StCihldren>{children}</StCihldren>
        <Footer />
      </MemberContext.Provider>
    </StLayout>
  );
}

export default Layout;
