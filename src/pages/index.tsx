import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { FormContact } from '../components/FormContact';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledge } from '../components/Knowledge';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';
import { getPrismicClient } from '../services/prismic';

type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
};

type HomeProps = {
  projects: Project[];
};

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Knowledge />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
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
