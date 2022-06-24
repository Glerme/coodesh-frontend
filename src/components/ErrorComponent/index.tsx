import { useNavigate } from "react-router";

import errorImg from "assets/images/error-img.svg";

import { Button } from "components/Button";

import styles from "./styles.module.scss";

export const ErrorComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["error-container"]}>
      <img src={errorImg} alt="Error 404" />
      <h1>Ops... An Error has occurred</h1>

      <div>
        <Button onClick={() => navigate("/")}>Go back</Button>
      </div>
    </div>
  );
};
