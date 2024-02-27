/* eslint-disable prettier/prettier */
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  private users = []; // Đây là một ví dụ, bạn có thể lưu trữ người dùng trong cơ sở dữ liệu

  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const accessToken = this.jwtService.sign({ email: user.email });
    return { accessToken };
  }

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    const newUser = { id: Date.now().toString(), name, email, password };
    this.users.push(newUser);
    const accessToken = this.jwtService.sign({ email: newUser.email });
    return { newUser, accessToken };
  }
}
