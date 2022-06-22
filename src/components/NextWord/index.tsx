import { Button } from "components/Button";
import { Meanings } from "types/Meaning";

import styles from "./styles.module.scss";

interface NextWordProps {
  meanings: Meanings[];
}

export const NextWord: React.FC<NextWordProps> = ({ meanings }) => {
  console.log(meanings);

  return (
    <article className={styles["meanings-container"]}>
      <div className={styles["buttons-container"]}>
        <Button>Voltar</Button>
        <Button>Proximo</Button>
      </div>
    </article>
  );
};
