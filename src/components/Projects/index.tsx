import Link from 'next/link';
import { ProjectItem } from '../ProjectItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjectItem
          title="Letmeask"
          type="App Web"
          slug="1"
          img="https://github.com/rocketseat-education/nlw-06-reactjs/raw/master/.github/cover.svg"
        />

        <ProjectItem
          title="Gameplay"
          type="App Mobile"
          slug="2"
          img="https://github.com/rocketseat-education/nlw-06-react-native/raw/master/.github/cover.png?style=flat"
        />

        <ProjectItem
          title="Rocketseat Example"
          type="Layout Responsivo"
          slug="3"
          img="https://github.com/pduartesilva2005/rocketseat-layout-responsivo/raw/main/.github/rocketseat.png"
        />
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
