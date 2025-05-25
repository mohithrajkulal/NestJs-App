import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { EmailService } from './email.service';
import { JwtAuthGuard } from 'src/auth/jwt.strategy';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('email')
@ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post('send')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                to: { type: 'string', example: 'example@example.com' },
                subject: { type: 'string', example: 'Test Subject' },
                text: { type: 'string', example: 'Hello from NestJS' },
            },
        },
    })
    async sendEmail(@Body() body: { to: string; subject: string; text: string}) {
        try {
            const result = await this.emailService.sendEmail(body.to, body.subject, body.text);
            return {
                message: 'Email sent successfully',
                info: result?.info,
            };
        } catch(error) {
            return {
                message: 'Email failed',
                info: error?.message
            }
        }
    }
}
