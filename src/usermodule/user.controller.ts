import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.services';// Fixed import path
import { User } from 'src/usermodule/user.interface';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {} // Changed to camelCase
  
  @Get()
  getusers(): User[] {
    return (this.userService.getusers()); // Changed to camelCase
  }
}
