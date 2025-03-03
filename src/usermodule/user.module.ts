import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
 
@Module({
  imports: [],// all modeules are defined here
  controllers: [UserController],//all routeds are defined here
  providers: [UserService],//all services are defined here logic
})
export class UserModule {}
