import { useAuth } from "hooks/useAuth";

import { SocialButton } from "components/SocialButton";

import styles from "./styles.module.scss";

export const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <main className="centralized-container">
      <div className={styles["login-container"]}>
        <div className={styles["login-content"]}>
          <div className={styles["title-container"]}>
            <h1>English Dictionary</h1>
          </div>

          <div>
            <SocialButton handleLogin={(res) => signIn(res)} />
          </div>
        </div>
      </div>
    </main>
  );
};
