import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.services';// Fixed import path
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {} // Changed to camelCase
  
  @Get()
  getusers(): string {
    return JSON.stringify(this.userService.getusers()); // Changed to camelCase
  }
}
