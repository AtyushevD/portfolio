import { SkillsGrid } from '@/components/skills';
import { Container } from '@/components/layout/Container';

export default function SkillsPage() {
  return (
    <Container>
      <h1 className="page-title">Мои навыки</h1>
      <SkillsGrid />
    </Container>
  );
}