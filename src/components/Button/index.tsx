import { ButtonHTMLAttributes } from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: 'primary' | 'secondary' | 'primary50';
  isOutlined?: boolean;
  icon?: () => JSX.Element;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  background = 'primary',
  isOutlined = false,
  children,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        styles['button-container'],
        `${background ? styles[`btn-${background}`] : styles[`btn-primary`]}`,
        `${isOutlined ? styles[`btn-outlined-${background}`] : ''}`,
      )}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};
