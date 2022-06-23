import { Router } from "./Router";

import { WordContextProvider } from "context/WordContext";

import "styles/global.scss";

export const App = () => {
  return (
    <WordContextProvider>
      <Router />;
    </WordContextProvider>
  );
};
