import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Container } from './styles';

type ProjectItemProps = {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
};

export function ProjectItem({ title, type, slug, imgUrl }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </Container>
  );
}
