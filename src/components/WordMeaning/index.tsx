import type { Meanings } from "types/Meaning";

import styles from "./styles.module.scss";
interface WordMeaningProps {
  meaning: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => {
  return (
    <div className={styles["meaning-container"]}>
      {meaning.map((meaning, i) => (
        <>
          <div>
            <p className={styles["part-speech-container"]}>
              {meaning?.partOfSpeech} /
            </p>
          </div>

          <div>
            <p>{meaning?.antonyms.map((antonym) => antonym)} </p>
          </div>

          <div>
            <p>{meaning?.synonyms.map((synonym) => synonym)} </p>
          </div>

          <div>
            {meaning?.definitions.map((definition) => definition.definition)}
          </div>
        </>
      ))}
    </div>
  );
};
