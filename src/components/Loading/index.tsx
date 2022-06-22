import styles from './styles.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles['loading-container']}>
      <div className={styles['loading-spinner']} />
    </div>
  );
};
