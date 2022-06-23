import type { Word } from "types/Word";

import { Player } from "components/Player";
import { TabList } from "components/TabList";
import { NextWord } from "components/NextWord";

import styles from "./styles.module.scss";
import { WordMeaning } from "components/WordMeaning";

interface HomeViewProps {
  word: Word[];
  refetch: () => Promise<void>;
}

export const HomeView: React.FC<HomeViewProps> = ({ word, refetch }) => {
  return (
    <main className={styles["view-container"]}>
      <section className={styles["left-container"]}>
        <div className={styles["word-container"]}>
          {word?.map(({ meanings, word }) => (
            <WordMeaning meaning={meanings} word={word} />
          ))}
        </div>

        <div className={styles["audio-container"]}>
          {word?.map(
            ({ phonetics }) =>
              phonetics.length > 0 &&
              phonetics.map((phonetic, i) => (
                <Player key={i} phonetic={phonetic} />
              ))
          )}
        </div>

        <NextWord
          refetch={refetch}
          meanings={word?.flatMap(({ meanings }) => meanings)}
        />
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
