import { Router } from "./Router";

import { WordContextProvider } from "context/WordContext";

import { ToastContainer } from "react-toastify";

import "styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <WordContextProvider>
      <ToastContainer />
      <Router />
    </WordContextProvider>
  );
};
