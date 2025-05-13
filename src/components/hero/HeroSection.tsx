import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.avatarWrapper}>
            <Image
                src="/images/avatar.jpg"
                alt="Фото Дениса Атюшева"
                width={150}
                height={150}
                className={styles.avatar}
            />
        </div>

        <div className={styles.text}>
          <h1 className={styles.title}>Денис Атюшев</h1>
          <p className={styles.subtitle}>Frontend-разработчик</p>
          <p className={styles.description}>
            Специализация: написание продуктового кода на React, оптимизация производительности, CI/CD и улучшение DX
          </p>
        </div>

        <div className={styles.buttons}>
          <Link href="/projects" passHref>
            <Button variant="primary">Мои проекты</Button>
          </Link>
          <Link href="/contacts" passHref>
            <Button variant="secondary">Контакты</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};