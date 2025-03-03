import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './usermodule/user.module';


@Module({
  imports: [UserModule],// all modeules are defined here
  controllers: [AppController],//all routeds are defined here
  providers: [AppService],//all services are defined here logic
})
export class AppModule {}
