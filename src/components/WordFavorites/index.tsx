import styles from "./styles.module.scss";

import randomWords from "random-words";

interface WordFavoritesProps {
  onClick: (word: string) => void;
}

export const WordFavorites: React.FC<WordFavoritesProps> = ({ onClick }) => {
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
