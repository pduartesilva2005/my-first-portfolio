import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/people.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Imagem de uma pessoa" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Pedro</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">// Minha Apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Pedro,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Duarte</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Aluno,</span>
            </div>
            <div>
              Empresa: <span className="blue">Rocketseat</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
