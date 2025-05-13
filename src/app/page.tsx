import { Button } from '@/components/ui/Button';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <h1>Мое резюме</h1>
      <Button variant="primary">Привет</Button>
      <Button variant="secondary">Кнопка</Button>
    </main>
  );
}