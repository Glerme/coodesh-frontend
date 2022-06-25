import { Button } from "components/Button";

import styles from "./styles.module.scss";

interface NextPreviousWordsProps {
  getNextWord: () => void;
  getPrevious: () => void;
}

export const NextPreviousWords: React.FC<NextPreviousWordsProps> = ({
  getNextWord,
  getPrevious,
}) => {
  return (
    <article className={styles["meanings-container"]}>
      <div className={styles["buttons-container"]}>
        <Button onClick={getPrevious} background="secondary">
          Back Word
        </Button>
        <Button onClick={getNextWord} background="secondary">
          Next Word
        </Button>
      </div>
    </article>
  );
};
