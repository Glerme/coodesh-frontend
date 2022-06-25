import { Button } from "components/Button";
import styles from "./styles.module.scss";

interface WordListProps {
  wordList: string[];
  handleWordFetch: (word: string) => void;
  fetchMoreWords: () => void;
}

export const WordList: React.FC<WordListProps> = ({
  wordList,
  handleWordFetch,
  fetchMoreWords,
}) => {
  return (
    <div className={styles["word-list-container"]}>
      {wordList?.map((word, i) => (
        <div
          key={i}
          className={styles["word-content"]}
          onClick={() => handleWordFetch(word)}
        >
          <p>{word}</p>
        </div>
      ))}

      <div className={styles["fetch-more-container"]}>
        <Button background="secondary" onClick={fetchMoreWords}>
          Fetch more words
        </Button>
      </div>
    </div>
  );
};
