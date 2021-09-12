import { Logger } from '@nestjs/common';
import socket from './services/socket.services';

export class NotificationGateway {
	private logger = new Logger('WebSocket');

	handleEvent(data: unknown): void {
		this.logger.log('Data: ' + data);
		socket.emit('server-socket', { socket: 'client', data: data });
		//  socket.on('client', {data});
	}
}


