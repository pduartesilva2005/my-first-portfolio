import { Container } from './styles';

type ExperienceItemProps = {
  year: string;
  title: string;
  description: string;
};

export function ExperienceItem({
  year,
  title,
  description
}: ExperienceItemProps) {
  return (
    <Container>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
}
