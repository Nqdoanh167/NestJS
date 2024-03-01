/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { SETTINGS } from '../../base/utils/utils';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async regsiter(@Body(SETTINGS.VALIDATION_PIPE) data: UserRegisterDto) {
    return await this.userService.register(data);
  }
}
