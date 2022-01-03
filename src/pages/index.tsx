import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { FormContact } from '../components/FormContact';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledge } from '../components/Knowledge';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledge />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
  );
}
