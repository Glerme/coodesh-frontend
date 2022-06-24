import type { Meanings } from "types/Meaning";

import { FiStar } from "react-icons/fi";

import styles from "./styles.module.scss";

interface WordMeaningProps {
  meaning: Meanings[];
  word: string;
  handleFavoriteWord: (word: string) => void;
}

export const WordMeaning: React.FC<WordMeaningProps> = ({
  meaning,
  word,
  handleFavoriteWord,
}) => {
  return (
    <div className={styles["meaning-container"]}>
      <div>
        <button
          className={styles["favorite-button"]}
          onClick={() => handleFavoriteWord(word)}
        >
          <FiStar size={24} color="white" />
        </button>
      </div>

      <div className={styles["word-container"]}>
        <h1>{word}</h1>
      </div>

      {meaning?.map(({ antonyms, definitions, partOfSpeech, synonyms }, i) => (
        <div key={i} className={styles["word-content"]}>
          <span className={styles["type-word"]}>
            <p>{partOfSpeech}</p>
          </span>

          {antonyms.length > 0 ? (
            <span className={styles["type-word"]}>
              Antonyms:
              {antonyms.length > 0 ? <p>{antonyms.join(" / ")}</p> : ""}
            </span>
          ) : (
            <></>
          )}

          {definitions.length > 0 ? (
            <span className={styles["type-word"]}>
              Definitions:
              {definitions.length > 0
                ? definitions?.map((definition, i) => (
                    <p key={i}>{definition.definition}</p>
                  ))
                : ""}
            </span>
          ) : (
            <></>
          )}

          {synonyms.length > 0 ? (
            <span className={styles["type-word"]}>
              Synonyms:
              {synonyms.length > 0
                ? synonyms?.map((synonym, i) => <p>{synonym}</p>)
                : ""}
            </span>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};
