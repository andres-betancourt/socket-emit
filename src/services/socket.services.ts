import io from 'socket.io-client';

const socket = io('https://devapigw.bluex.cl', {
	path: '/api/fulfillment/notifications/v1',
});

export default socket;
