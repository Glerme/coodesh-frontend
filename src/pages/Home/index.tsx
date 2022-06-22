import type { Word } from "types/Word";

import { useFetch } from "hooks/useFetch";

import { HomeView } from "views/Home";

import { Loading } from "components/Loading";
import { ErrorComponent } from "components/ErrorComponent";

export const HomePage: React.FC = () => {
  const { data: word, loading, errors } = useFetch<Word[]>("/hello");

  console.log(word);

  if (loading) {
    return <Loading />;
  }

  if (errors) {
    return <ErrorComponent />;
  }

  return <HomeView word={word} />;
};
