import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Денис Атюшев
        </p>
        <div className={styles.links}>
          <a href="mailto:denis.atyushev@yandex.ru" className={styles.link}>
            Email
          </a>
          <a href="https://github.com/AtyushevD" target="_blank" className={styles.link}>
            GitHub
          </a>
          <a href="https://t.me/DenisA321" target="_blank" className={styles.link}>
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}