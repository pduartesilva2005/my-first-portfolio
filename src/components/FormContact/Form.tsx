import { Container, Input, Textarea } from './styles';

export function Form() {
  return (
    <Container>
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" type="email" required />
      <Textarea placeholder="Mensagem" required />

      <button type="submit">ENVIAR</button>
    </Container>
  );
}
