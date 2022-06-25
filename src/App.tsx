import { useEffect } from "react";
import { gapi } from "gapi-script";

import { Router } from "./Router";

import { AuthContextProvider } from "context/AuthContext";
import { WordContextProvider } from "context/WordContext";

import { ToastContainer } from "react-toastify";

import "styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        plugin_name: "coodesh-frontend",
      });
    });
  }, []);

  return (
    <AuthContextProvider>
      <WordContextProvider>
        <ToastContainer />
        <Router />
      </WordContextProvider>
    </AuthContextProvider>
  );
};
