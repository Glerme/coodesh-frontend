import classNames from "classnames";

import { Button } from "components/Button";
import { useAuth } from "hooks/useAuth";

import { FiMenu } from "react-icons/fi";

import styles from "./styles.module.scss";

interface HeaderProps {
  isMenuOpen: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, onToggle }) => {
  const { signOut } = useAuth();

  return (
    <>
      <nav className={styles["navbar-container"]}>
        <div className={styles["logo-container"]}>
          <FiMenu
            size={30}
            color={"#b395cc"}
            onClick={onToggle}
            className={styles["menu-button"]}
          />
        </div>

        <header className={styles["header-container"]}>
          <div
            className={classNames(
              styles["menu-container"],
              isMenuOpen && styles["menu-open"]
            )}
          >
            <ul
              className={classNames(
                styles["list-container"],
                isMenuOpen && styles["menu-open"]
              )}
            >
              <li>
                <Button onClick={signOut}>Logout</Button>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
};
