import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "pages/Home";
import { LoginPage } from "pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
