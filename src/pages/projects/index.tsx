import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { Container } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <Container>
      <Header />

      <main className="container">
        <ProjectItem
          title="Letmeask"
          type="App Web"
          slug="1"
          imgUrl="https://github.com/rocketseat-education/nlw-06-reactjs/raw/master/.github/cover.svg"
        />

        <ProjectItem
          title="Gameplay"
          type="App Mobile"
          slug="2"
          imgUrl="https://github.com/rocketseat-education/nlw-06-react-native/raw/master/.github/cover.png?style=flat"
        />

        <ProjectItem
          title="Rocketseat Example"
          type="Layout Responsivo"
          slug="3"
          imgUrl="https://github.com/pduartesilva2005/rocketseat-layout-responsivo/raw/main/.github/rocketseat.png"
        />

        <ProjectItem
          title="Move.it"
          type="App Web"
          slug="4"
          imgUrl="https://github.com/pduartesilva2005/nlw-04-reactjs/raw/main/screenshot.PNG"
        />
      </main>
    </Container>
  );
}
