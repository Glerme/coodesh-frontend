import type { Word } from "types/Word";

import { Player } from "components/Player";
import { TabList } from "components/TabList";
import { NextWord } from "components/NextWord";

import styles from "./styles.module.scss";
import { WordMeaning } from "components/WordMeaning";

interface HomeViewProps {
  word: Word[];
}

export const HomeView: React.FC<HomeViewProps> = ({ word }) => {
  return (
    <main className={styles["view-container"]}>
      <section className={styles["left-container"]}>
        <div className={styles["word-container"]}>
          <div className={styles["word-content"]}>
            {new Set(word?.map(({ word }, i) => <h3 key={i}>{word}</h3>))}

            {word?.map(({ meanings }) => (
              <WordMeaning meaning={meanings} />
            ))}
          </div>
        </div>

        <div className={styles["audio-container"]}>
          {word?.flatMap(({ phonetics }) =>
            phonetics?.map((phonetic, i) => (
              <Player key={i} url={phonetic.audio} />
            ))
          )}
        </div>

        <NextWord meanings={word?.flatMap(({ meanings }) => meanings)} />
      </section>

      <section>
        <TabList labelTabs={["Word List", "Favorites"]}>
          <div key={1}>{["a"].map((word) => word)}</div>
          <div key={2}>favorites</div>
        </TabList>
      </section>
    </main>
  );
};
