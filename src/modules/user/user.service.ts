/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async register(data: UserRegisterDto) {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    await this.userRepository.save(user);
    return user;
  }
  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
}
