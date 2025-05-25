import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
    @ApiProperty()
    @IsEmail()
    email: string; 

    @ApiProperty()
    @IsNotEmpty()
    password: string
}