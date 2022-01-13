import axios from 'axios';

type SendMail = {
  name: string;
  senderMail: string;
  content: string;
};

export async function sendMail({ name, senderMail, content }: SendMail) {
  const data = {
    name,
    senderMail,
    content
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (err) {
    return err;
  }
}
