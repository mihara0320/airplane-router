import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationController } from './navigation/navigation.controller';

@Module({
  imports: [],
  controllers: [AppController, NavigationController],
  providers: [AppService],
})
export class AppModule {}
