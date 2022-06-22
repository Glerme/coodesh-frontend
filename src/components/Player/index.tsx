import styles from "./styles.module.scss";

interface PlayerProps {
  url: string;
}

export const Player: React.FC<PlayerProps> = ({ url }) => {
  return (
    <div className={styles["container-audio"]}>
      <audio controls>
        <source src={url} type="audio/ogg" />
        Your browser dose not Support the audio Tag
      </audio>
    </div>
  );
};
