import { ExperienceTimeline } from '@/components/experience';
import { EXPERIENCE } from '@/lib/experience';
import { Container } from '@/components/layout/Container';

export default function ExperiencePage() {
  return (
    <Container>
      <h1 className="page-title">Опыт работы</h1>
      <ExperienceTimeline items={EXPERIENCE} />
    </Container>
  );
}