import { Button } from "components/Button";
import { Meanings } from "types/Meaning";

import styles from "./styles.module.scss";

interface NextWordProps {
  meanings: Meanings[];
  refetch: () => Promise<void>;
}

export const NextWord: React.FC<NextWordProps> = ({ meanings, refetch }) => {
  return (
    <article className={styles["meanings-container"]}>
      <div className={styles["buttons-container"]}>
        {/* <Button onClick={refetch}>Voltar</Button> */}
        <Button onClick={refetch}>Next Word</Button>
      </div>
    </article>
  );
};
