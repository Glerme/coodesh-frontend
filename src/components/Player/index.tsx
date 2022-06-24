import { Phonetics } from "types/Phonetic";

import styles from "./styles.module.scss";

interface PlayerProps {
  phonetic: Phonetics;
}

export const MusicPlayer: React.FC<PlayerProps> = ({ phonetic }) => {
  return (
    <div className={styles["container-audio"]}>
      <div>
        {phonetic.text && (
          <p>
            Pronunciation: <span>{phonetic.text}</span>
          </p>
        )}

        {phonetic.audio && (
          <audio controls>
            <source src={phonetic.audio} type="audio/ogg" />
            Your browser dose not Support the audio Tag
          </audio>
        )}
      </div>
    </div>
  );
};
