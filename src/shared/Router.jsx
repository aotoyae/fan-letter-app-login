import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "pages/Home";
import Member from "pages/Member";
import Detail from "pages/Detail";
import { useState } from "react";

export default function Router() {
  const [letters, setLetters] = useState([]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            letters={letters}
            setLetters={setLetters}
          />
          <Route
            path="/member/:id"
            element={<Member letters={letters} setLetters={setLetters} />}
          />
          <Route path="/detail/:id" element={<Detail letters={letters} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
