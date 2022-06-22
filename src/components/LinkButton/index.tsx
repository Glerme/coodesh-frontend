import { HTMLAttributes } from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

interface LinkButton extends HTMLAttributes<HTMLAnchorElement> {
  background?: 'primary' | 'secondary' | 'primary50';
  isOutlined?: boolean;
  children: React.ReactNode;
  title: string;
  href: string;
  icon: () => JSX.Element;
}

export const LinkButton: React.FC<LinkButton> = ({
  background = 'primary',
  isOutlined = false,
  children,
  icon: Icon,
  href,
  title,
  onClick,
  ...rest
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        styles['button-container'],
        `${background ? styles[`btn-${background}`] : styles[`btn-primary`]}`,
        `${isOutlined ? styles[`btn-outlined-${background}`] : ''}`,
      )}
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </a>
  );
};
