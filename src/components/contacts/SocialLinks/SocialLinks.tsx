import { FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';
import styles from './SocialLinks.module.css';

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a 
        href="https://github.com/AtyushevD" 
        target="_blank"
        aria-label="GitHub"
        className={styles.link}
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://t.me/DenisA321"
        target="_blank"
        aria-label="Telegram"
        className={styles.link}
      >
        <FaTelegram size={24} />
      </a>
      <a
        href="mailto:denis.atyushev@yandex.ru"
        aria-label="Email"
        className={styles.link}
      >
        <FaEnvelope size={28} />
      </a>
    </div>
  );
};