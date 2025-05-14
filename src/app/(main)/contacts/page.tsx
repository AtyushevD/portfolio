import { ContactForm } from '@/components/contacts';
import { SocialLinks } from '@/components/contacts';
import { Container } from '@/components/layout/Container';

import styles from './page.module.css';

export default function ContactsPage() {
  return (
    <Container>
      <h1 className={styles.pageTitle}>Контакты</h1>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Свяжитесь со мной</h2>
          <p>Email: denis.atyushev@yandex.ru</p>
          <SocialLinks />
        </div>
        <div className={styles.contactForm}>
          <h2>Форма обратной связи</h2>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}