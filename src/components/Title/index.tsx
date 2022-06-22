import styles from './styles.module.scss';

interface TitleProps {
  color: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children, color }) => {
  return (
    <div className={styles['title-container']}>
      <h1 className={styles[color]}>{children}</h1>
    </div>
  );
};
