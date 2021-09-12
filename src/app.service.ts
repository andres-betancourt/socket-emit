import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.socket';

@Injectable()
export class AppService {
  constructor(private readonly notificationGateway: NotificationGateway) {}
  getHello(): string {
    const result: any = this.notificationGateway.handleEvent('test');
    return result;
  }
}
