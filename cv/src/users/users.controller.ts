import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  // constructor(private usersController: UsersService) {}

  @Post('/signup')
  create(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
