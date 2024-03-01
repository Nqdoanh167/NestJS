/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

// auth.dto.ts
export class LoginDto {
  @IsNotEmpty({ message: 'The input is require' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'The input is require' })
  @Length(6)
  password: string;
}

export class RegisterDto {
  @IsString({ message: 'The name is string' })
  @IsNotEmpty({ message: 'The input is require' })
  name: string;

  @IsNotEmpty({ message: 'The input is require' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'The input is require' })
  @Length(6)
  password: string;
}
