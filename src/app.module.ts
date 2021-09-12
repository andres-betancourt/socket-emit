import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationGateway } from './notification.socket';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, NotificationGateway],
})
export class AppModule {}
