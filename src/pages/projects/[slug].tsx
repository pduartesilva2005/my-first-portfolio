import { BannerProject } from '../../components/BannerProject';
import { Header } from '../../components/Header';
import { Container } from '../../styles/ProjectStyles';

export default function Project() {
  return (
    <Container>
      <Header />
      <BannerProject
        title="Letmeask"
        type="App Web"
        imgUrl="https://github.com/rocketseat-education/nlw-06-reactjs/raw/master/.github/cover.svg"
      />

      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem impedit consequatur debitis quaerat, labore eveniet
          asperiores atque, maxime beatae id nam deserunt, ipsa vel perferendis
          sint! Quibusdam quis provident in?
        </p>
        <button type="submit">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </Container>
  );
}
