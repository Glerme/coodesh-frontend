import { useNavigate } from "react-router";

import { SocialButton } from "components/SocialButton";

import styles from "./styles.module.scss";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="centralized-container">
      <div className={styles["login-container"]}>
        <div className={styles["login-content"]}>
          <SocialButton>Login with google</SocialButton>
        </div>
      </div>
    </main>
  );
};
