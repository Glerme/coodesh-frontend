import { toast } from "react-toastify";

import { useWord } from "hooks/useWord";

import { Player } from "components/Player";
import { Loading } from "components/Loading";
import { TabList } from "components/TabList";
import { WordList } from "components/WordList";
import { WordMeaning } from "components/WordMeaning";
import { NextPreviousWords } from "components/NextWord";
import { WordFavorites } from "components/WordFavorites";
import { ErrorComponent } from "components/ErrorComponent";

import styles from "./styles.module.scss";
import { generateWords } from "functions/generateWords";
import { useState } from "react";

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

  console.log(wordStep);

  const handleNextWord = async (word: string) => {
    setWords((oldstate) => oldstate.filter((wordOld) => wordOld !== word));

    await getOneWord(word);
  };

  const handleFavoriteWord = (word: string) => {
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
      <section className={styles["left-container"]}>
        <div className={styles["word-container"]}>
          {data?.words?.map(({ meanings, word }, i) => (
            <WordMeaning
              key={i}
              handleFavoriteWord={handleFavoriteWord}
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

        <NextPreviousWords
          getNextWord={handleNextStep}
          getPrevious={handlePreviuousStep}
        />
      </section>

      <section className={styles["right-container"]}>
        <TabList labelTabs={["Word List", "Favorites"]}>
          <WordList key={0} wordList={words} onClick={handleNextWord} />
          <WordFavorites
            key={1}
            onClick={removeFavoriteWord}
            wordList={favoriteWords}
          />
        </TabList>
      </section>
    </main>
  );
};
