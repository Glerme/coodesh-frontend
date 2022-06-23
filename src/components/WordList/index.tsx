import styles from "./styles.module.scss";

interface WordListProps {
  wordList: string[];
  onClick: (word: string) => void;
}

export const WordList: React.FC<WordListProps> = ({ wordList, onClick }) => {
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
