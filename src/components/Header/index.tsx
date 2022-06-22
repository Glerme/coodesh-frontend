import classNames from "classnames";

import { FiMenu } from "react-icons/fi";

import styles from "./styles.module.scss";

interface HeaderProps {
  isMenuOpen: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, onToggle }) => {
  return (
    <>
      <nav className={classNames(styles["navbar-container"])}>
        <div className={styles["logo-container"]}>
          <img src="/logo.svg" alt="Logo" width="80" height="80" />

          <FiMenu
            size={30}
            color={"#ec6608"}
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
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
};
