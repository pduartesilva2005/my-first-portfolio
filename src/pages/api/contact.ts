import nodemailer from 'nodemailer';
import { google } from 'googleapis';

type Mailer = {
  senderMail: string;
  name: string;
  text: string;
};

const { OAuth2 } = google.auth;

const email = process.env.MAILADDRESS;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const OAuth2Client = new OAuth2(clientId, clientSecret);
OAuth2Client.setCredentials({ refresh_token: refreshToken });

const accessToken = OAuth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
} as any);

function mailer({ senderMail, name, text }: Mailer) {
  const from = `${name} <${senderMail}>`;

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}

export default async (request, response) => {
  const { senderMail, name, content } = request.body;

  if (senderMail === '' || name === '' || content === '') {
    response.status(403).send();
    return;
  }

  const mailerResponse = await mailer({ senderMail, name, text: content });

  response.send(mailerResponse);
};
