import { ReactNode } from 'react';
import { Container } from './styles';

type KnowledgeItemProps = {
  title: string;
  icon: ReactNode;
};

export function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <Container data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </Container>
  );
}
