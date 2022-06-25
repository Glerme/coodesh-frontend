import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "pages/Home";
import { LoginPage } from "pages/Login";

import { Loading } from "components/Loading";

import { useAuth } from "hooks/useAuth";

export const Router = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomePage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
