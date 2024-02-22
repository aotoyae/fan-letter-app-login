import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import Member from "pages/Member";
import Detail from "pages/Detail";
import Login from "pages/Login";
import MyPage from "pages/MyPage";
import { useSelector } from "react-redux";

export default function Router() {
  const isLogin = useSelector((state) => state.authLogin.isLogin);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/member/:id" element={<Member />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate replace to="/login" />} />
            </>
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
