import React, { createContext, useEffect, useState } from "react";

import type { Word } from "types/Word";

import { getApi } from "functions/getApi";
import { generateWords } from "functions/generateWords";

interface WordContextProviderProps {
  children?: React.ReactNode;
}

interface WordContextProps {
  data: {
    words: Word[];
    errors: any | null;
    loading: boolean;
  } | null;
  favoriteWords: string[];
  refetch: () => void;
  getOneWord: (word: string) => Promise<void>;
  setFavorites: (word: string) => void;
  removeFavorites: (index: number) => void;
}

export const WordContext = createContext<WordContextProps>({
  data: null,
  favoriteWords: [],
  refetch: () => {},
  getOneWord: async () => {},
  setFavorites: () => {},
  removeFavorites: () => {},
});

export const WordContextProvider = ({ children }: WordContextProviderProps) => {
  const [words, setWords] = useState<Word[]>([]);
  const [errors, setErrors] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);

  const setFavorites = (word: string) => {
    const parsedValue = JSON.stringify([...favoriteWords, word]);

    localStorage.setItem("favoriteWords", parsedValue);

    setFavoriteWords((oldState) => [...oldState, word]);
  };

  const removeFavorites = (index: number) => {
    const removed = favoriteWords.filter((_, i) => i !== index);

    const parsedValue = JSON.stringify(removed);

    localStorage.setItem("favoriteWords", parsedValue);

    setFavoriteWords(removed);
  };

  const verifyFavoritesWords = () => {
    const items = localStorage.getItem("favoriteWords");

    if (items) {
      setFavoriteWords([...JSON.parse(items)]);
    }
  };

  const getListWords = async () => {
    try {
      setLoading(true);

      const words = generateWords(1);

      const { data } = await getApi().get(words[0]);

      setWords(data);
    } catch (error) {
      console.error(error);

      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  const getOneWord = async (word: string) => {
    try {
      setLoading(true);

      const { data } = await getApi().get(word);

      setWords(data);
    } catch (error) {
      console.error(error);

      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  const refetch = getListWords;

  useEffect(() => {
    getListWords();
    verifyFavoritesWords();
  }, []);

  return (
    <WordContext.Provider
      value={{
        data: {
          words,
          loading,
          errors,
        },
        favoriteWords,
        refetch,
        getOneWord,
        setFavorites,
        removeFavorites,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
