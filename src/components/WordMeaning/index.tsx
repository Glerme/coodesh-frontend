import type { Meanings } from "types/Meaning";

import styles from "./styles.module.scss";
interface WordMeaningProps {
  meaning: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => {
  return (
    <div>
      {meaning?.map((meaning, i) => (
        <div key={i} className={styles[""]}>
          <p>{meaning?.partOfSpeech ? `${meaning.partOfSpeech},` : "-"}</p>
          <p>{meaning?.antonyms.map((antonym) => antonym)} </p>
          <p>{meaning?.synonyms.map((synonym) => synonym)} </p>
          <p>
            {meaning?.definitions.map((definition) => definition.definition)}
          </p>
        </div>
      ))}
    </div>
  );
};
