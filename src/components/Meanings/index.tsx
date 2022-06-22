import { Button } from "components/Button";

import styles from "./styles.module.scss";

interface MeaningsProps {}

export const Meanings: React.FC<MeaningsProps> = ({}) => {
  return (
    <article className={styles["meanings-container"]}>
      <h3>Meanings</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
        tempora.
      </p>

      <div className={styles["buttons-container"]}>
        <Button>Voltar</Button>
        <Button>Proximo</Button>
      </div>
    </article>
  );
};
