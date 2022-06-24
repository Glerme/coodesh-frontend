import { useState } from "react";

import { toast } from "react-toastify";

import { useWord } from "hooks/useWord";
import { generateWords } from "functions/generateWords";

import { Player } from "components/Player";
import { Loading } from "components/Loading";
import { TabList } from "components/TabList";
import { WordList } from "components/WordList";
import { WordMeaning } from "components/WordMeaning";
import { WordFavorites } from "components/WordFavorites";
import { ErrorComponent } from "components/ErrorComponent";
import { NextPreviousWords } from "components/NextPreviousWords";

import styles from "./styles.module.scss";

export const HomeView: React.FC = () => {
  const [words, setWords] = useState(() => generateWords(100));

  const [wordStep, setWordStep] = useState<string[][]>([[]]);

  const { data, favoriteWords, getOneWord, setFavorites, removeFavorites } =
    useWord();

  const handleNextStep = () => {
    const word = generateWords(1);

    setWordStep((oldState) => [...oldState, [...word]]);
  };

  const handlePreviuousStep = () => {
    const words = wordStep.pop();

    console.log(words);
  };

  const getNextWord = async (word: string) => {
    setWords((oldstate) => oldstate.filter((wordOld) => wordOld !== word));

    await getOneWord(word);
  };

  const addFavoriteWord = (word: string) => {
    setFavorites(word);

    toast.success(`Added word to favorites list`, {
      theme: "dark",
    });
  };

  const removeFavoriteWord = (index: number) => {
    removeFavorites(index);

    toast.warning(`Removed word to favorites list`, {
      theme: "dark",
    });
  };

  if (data?.loading) {
    return <Loading />;
  }

  if (data?.errors) {
    return <ErrorComponent />;
  }

  return (
    <main className={styles["view-container"]}>
      <section className={styles["containers"]}>
        <div className={styles["word-container"]}>
          {data?.words?.map(({ meanings, word }, i) => (
            <WordMeaning
              key={i}
              handleFavoriteWord={addFavoriteWord}
              meaning={meanings}
              word={word}
            />
          ))}
        </div>

        <div className={styles["audio-container"]}>
          {data?.words?.map(
            ({ phonetics }) =>
              phonetics.length > 0 &&
              phonetics?.map((phonetic, i) => (
                <Player key={i} phonetic={phonetic} />
              ))
          )}
        </div>
      </section>

      <section>
        <div className={styles["sticky-container"]}>
          <TabList labelTabs={["Word List", "Favorites"]}>
            <WordList key={0} wordList={words} onClick={getNextWord} />
            <WordFavorites
              key={1}
              onClick={removeFavoriteWord}
              wordList={favoriteWords}
            />
          </TabList>
          <NextPreviousWords
            getNextWord={handleNextStep}
            getPrevious={handlePreviuousStep}
          />
        </div>
      </section>
    </main>
  );
};
