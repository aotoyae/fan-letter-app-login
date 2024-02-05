import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Member from "pages/Member";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Member />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
