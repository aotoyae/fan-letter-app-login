import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import Member from "pages/Member";
import Detail from "pages/Detail";
import Login from "pages/Login";
import MyPage from "pages/MyPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/member/:id" element={<Member />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
