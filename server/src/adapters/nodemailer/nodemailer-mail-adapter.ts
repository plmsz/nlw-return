import { MailAdapter, SendMailData } from '../mail-adapters';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '0d3cbed4c44a08',
    pass: '49e97620cd60fc',
  },
});

export class NodeMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Admin <admin@gmail.com',
      subject,
      html: body,
    });
  }
}
