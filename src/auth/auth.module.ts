/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY_HERE', // Thay YOUR_SECRET_KEY_HERE bằng một chuỗi bí mật thực tế
      signOptions: { expiresIn: '1h' }, // Tuỳ chỉnh thời gian hết hạn cho token
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
