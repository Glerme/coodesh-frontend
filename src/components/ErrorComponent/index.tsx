// import errorImg from "assets/error-img.svg";

import styles from "./styles.module.scss";

export const ErrorComponent: React.FC = () => {
  return (
    <div className={styles["error-container"]}>
      {/* <img src={errorImg} alt="Error 404" /> */}
      <h1>Ops... Ocorreu um erro</h1>
    </div>
  );
};
