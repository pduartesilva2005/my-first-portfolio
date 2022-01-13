import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';
import { sendMail } from '../../services/sendMail';
import { theme } from '../../styles/theme';
import { Container, Input, Textarea } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !message) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });

      return;
    }

    try {
      setLoading(true);

      await sendMail({ name, senderMail: email, content: message });

      setName('');
      setEmail('');
      setMessage('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (err) {
      toast(
        'Ocorreu um erro ao tentar enviar a sua mensagem. Tente novamente!',
        {
          style: {
            background: theme.error,
            color: '#fff'
          }
        }
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <Textarea
        placeholder="Mensagem"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />

      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </Container>
  );
}
