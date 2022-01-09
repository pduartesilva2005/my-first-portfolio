import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { getPrismicClient } from '../../services/prismic';
import { Container } from '../../styles/ProjectsStyles';

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

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <Header />

      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map((project: any) => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
