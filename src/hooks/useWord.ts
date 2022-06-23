import { useContext } from "react";

import { WordContext } from "context/WordContext";

export const useWord = () => useContext(WordContext);
