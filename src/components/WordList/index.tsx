import styles from "./styles.module.scss";

import randomWords from "random-words";

interface WordListProps {
  onClick: (word: string) => void;
}

export const WordList: React.FC<WordListProps> = ({ onClick }) => {
  const wordList = randomWords(50);

  return (
    <div className={styles["word-list-container"]}>
      {wordList?.map((word, i) => (
        <div
          key={i}
          className={styles["word-content"]}
          onClick={() => onClick(word)}
        >
          <p>{word}</p>
        </div>
      ))}
    </div>
  );
};
