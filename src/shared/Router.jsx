import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "pages/Home";
import Member from "pages/Member";
import Detail from "pages/Detail";
import { useState } from "react";
import { LetterContext } from "context/LetterContext";

export default function Router() {
  const [letters, setLetters] = useState([]);

  return (
    <BrowserRouter>
      <Layout>
        <LetterContext.Provider value={{ letters, setLetters }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member/:id" element={<Member />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </LetterContext.Provider>
      </Layout>
    </BrowserRouter>
  );
}
