import classNames from "classnames";
import { useState } from "react";

import styles from "./styles.module.scss";

interface TabListProps {
  labelTabs: string[] | undefined;
  children: React.ReactNode[];
}

export const TabList: React.FC<TabListProps> = ({ labelTabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles["tablist-container"]}>
      <div className={styles["tablist-buttons-container"]}>
        {labelTabs?.map((label, index) => (
          <button
            key={index}
            className={classNames(
              styles["tablist-buttons"],
              activeTab === index && styles["active-tab"]
            )}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles["tablist-content-container"]}>
        {labelTabs?.find((_, index) => index === activeTab) &&
          children.find((_, index) => index === activeTab)}
      </div>
    </div>
  );
};
