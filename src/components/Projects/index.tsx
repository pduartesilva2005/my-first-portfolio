import Link from 'next/link';
import { ProjectItem } from './ProjectItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
};

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </section>

      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
