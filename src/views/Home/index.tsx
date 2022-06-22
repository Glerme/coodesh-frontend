import type { Word } from "types/Word";

import { Player } from "components/Player";
import { TabList } from "components/TabList";
import { Meanings } from "components/Meanings";

import styles from "./styles.module.scss";

interface HomeViewProps {
  word: Word[];
}

export const HomeView: React.FC<HomeViewProps> = ({ word }) => {
  return (
    <main className={styles["view-container"]}>
      <section className={styles["left-container"]}>
        <div className={styles["word-container"]}>
          <h3>Words</h3>
          <div className={styles["word-content"]}>
            {word?.map(({ word }, i) => (
              <h3 key={i}>{word}</h3>
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

        <Meanings />
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
