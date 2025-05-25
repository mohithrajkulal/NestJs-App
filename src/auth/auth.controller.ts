import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthDto } from 'src/user/dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @ApiBody({
        type: AuthDto,
        required: true,
        description: 'Email payload with recipient address, subject, and message text',
    })
    @ApiResponse({ status: 201, description: 'User logged in successfully' })
    async login(@Body() body: { email: string; password: string}) {
        const validUser = await this.authService.validateUser(body.email, body.password);
        return this.authService.login(validUser);
    }
}
