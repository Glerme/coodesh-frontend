import type { Word } from "types/Word";

import { useFetch } from "hooks/useFetch";

import { HomeView } from "views/Home";

import { Loading } from "components/Loading";
import { ErrorComponent } from "components/ErrorComponent";

import randomWords from "random-words";

export const HomePage: React.FC = () => {
  const wordList = randomWords(1);

  const {
    data: word,
    loading,
    errors,
    refetch,
  } = useFetch<Word[]>(`${wordList}`);

  if (loading) {
    return <Loading />;
  }

  if (errors) {
    return <ErrorComponent />;
  }

  return <HomeView word={word} refetch={(word) => refetch(word)} />;
};
