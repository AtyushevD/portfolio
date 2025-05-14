import { ProjectsShowcase } from '@/components/projects';
import { Container } from '@/components/layout/Container';

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="page-title">Мои проекты</h1>
      <p className="page-subtitle">
        Некоторые проекты находятся под NDA — детали могу обсудить лично
      </p>
      <ProjectsShowcase />
    </Container>
  );
}