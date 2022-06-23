import type { Meanings } from "types/Meaning";

import styles from "./styles.module.scss";

interface WordMeaningProps {
  meaning: Meanings[];
  word: string;
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning, word }) => {
  return (
    <div className={styles["meaning-container"]}>
      <div className={styles["word-container"]}>
        <h1>{word}</h1>
      </div>

      {meaning.map(({ antonyms, definitions, partOfSpeech, synonyms }, i) => (
        <div key={i} className={styles["word-content"]}>
          <p className={styles["type-word"]}>{partOfSpeech}</p>

          {antonyms.length > 0 ? (
            <p className={styles["type-word"]}>
              Antonyms:
              {antonyms.length > 0 ? <span>{antonyms.join(" / ")}</span> : ""}
            </p>
          ) : (
            <></>
          )}

          {definitions.length > 0 ? (
            <p className={styles["type-word"]}>
              Definitions:
              {definitions.length > 0
                ? definitions.map((definition, i) => (
                    <span key={i}>{definition.definition}</span>
                  ))
                : ""}
            </p>
          ) : (
            <></>
          )}

          {synonyms.length > 0 ? (
            <p className={styles["type-word"]}>
              Synonyms:
              {synonyms.length > 0
                ? synonyms.map((synonym, i) => <span key={i}>{synonym}</span>)
                : ""}
            </p>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};
