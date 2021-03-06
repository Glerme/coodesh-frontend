import styles from "./styles.module.scss";

interface WordFavoritesProps {
  wordList: string[];
  onClick: (index: number) => void;
}

export const WordFavorites: React.FC<WordFavoritesProps> = ({
  onClick,
  wordList,
}) => {
  return (
    <div className={styles["word-list-container"]}>
      {wordList.length > 0 ? (
        wordList?.map((word, i) => (
          <div
            key={i}
            className={styles["word-content"]}
            onClick={() => onClick(i)}
          >
            <p>{word}</p>
          </div>
        ))
      ) : (
        <div className={styles["empty-container"]}>
          <h3>No favorite words</h3>
        </div>
      )}
    </div>
  );
};
