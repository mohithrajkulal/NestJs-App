import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mohithrajkulal5@gmail.com',
        pass: 'mruu lhdh yrny bylf',
      },
    });

    async sendEmail(to: string, subject: string, text: string) {
      const info = await this.transporter.sendMail({
        from: 'mohithrajkulal5@gmail.com',
        to,
        subject,
        text,
      });

      return { message: 'Email sent', info };
    }

    async recieveEmail(from: string, subject: string, text: string) {
      const info = await this.transporter.sendMail({
        from,
        to: 'mohithrajkulal5@gmail.com',
        subject,
        text,
      });

      return { message: 'Email sent', info };
    }
}
