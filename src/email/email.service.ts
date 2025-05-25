import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    async sendEmail(to: string, subject: string, text: string) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mohithrajkulal5@gmail.com',
          pass: 'mruu lhdh yrny bylf',
        },
      });

      const info = await transporter.sendMail({
        from: '"Nest App" <mohithrajkulal5@gmail.com>',
        to,
        subject,
        text,
      });

      return { message: 'Email sent', info };
    }
}
