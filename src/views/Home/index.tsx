import type { Word } from "types/Word";

import { Player } from "components/Player";
import { TabList } from "components/TabList";
import { WordList } from "components/WordList";
import { WordMeaning } from "components/WordMeaning";
import { WordFavorites } from "components/WordFavorites";

import styles from "./styles.module.scss";

interface HomeViewProps {
  word: Word[];
  refetch: (word: string) => Promise<void>;
}

export const HomeView: React.FC<HomeViewProps> = ({ word, refetch }) => {
  const handleNextWord = (word: string) => {
    refetch(word);
  };

  return (
    <main className={styles["view-container"]}>
      <section className={styles["left-container"]}>
        <div className={styles["word-container"]}>
          {word?.map(({ meanings, word }, i) => (
            <WordMeaning meaning={meanings} word={word} key={i} />
          ))}
        </div>

        <div className={styles["audio-container"]}>
          {word?.map(
            ({ phonetics }) =>
              phonetics.length > 0 &&
              phonetics?.map((phonetic, i) => (
                <Player key={i} phonetic={phonetic} />
              ))
          )}
        </div>
        {/* 
        <NextWord
          refetch={refetch(word)}
          meanings={word?.flatMap(({ meanings }) => meanings)}
        /> */}
      </section>

      <section className={styles["right-container"]}>
        <TabList labelTabs={["Word List", "Favorites"]}>
          <WordList key={0} onClick={handleNextWord} />
          <WordFavorites key={1} onClick={handleNextWord} />
        </TabList>
      </section>
    </main>
  );
};
