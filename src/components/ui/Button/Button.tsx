import styles from './Button.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export const Button = ({ variant = 'primary', children }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};