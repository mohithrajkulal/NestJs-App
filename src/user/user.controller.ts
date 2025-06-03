import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt.strategy';

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiResponse({ status: 201, description: 'User created successfully' })
    create(@Body() data: CreateUserDto) {
        return this.userService.create(data);
    }

    @Get()
    @ApiResponse({ status: 201, description: 'fetch all users' })
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiResponse({ status: 201, description: 'fetch seleceted user' })
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Delete(':id')
    @ApiResponse({ status: 201, description: 'delete seleceted user' })
    remove(@Param('id') id: string) {
        return this.userService.remove(id)
    }
}
