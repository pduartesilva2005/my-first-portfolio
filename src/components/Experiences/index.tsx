import { ExperienceItem } from '../ExperienceItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev Full-Stack"
          description="Lorem ipsum dolor it amet, consectetur adipiscing elit."
        />

        <ExperienceItem
          year="2020"
          title="Student/Dev"
          description="Lorem ipsum dolor it amet, consectetur adipiscing elit."
        />

        <ExperienceItem
          year="2019"
          title="Student"
          description="Lorem ipsum dolor it amet, consectetur adipiscing elit."
        />

        <ExperienceItem
          year="2018"
          title="Student"
          description="Lorem ipsum dolor it amet, consectetur adipiscing elit."
        />
      </section>
    </Container>
  );
}
