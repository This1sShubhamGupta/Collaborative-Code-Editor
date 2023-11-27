import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        transports: ['websocket'],
    };

    try {
        const socket = io(process.env.REACT_APP_BACKEND_URL, options);
        // Additional logic if the connection is successful
        return socket;
    } catch (error) {
        console.error('Socket connection failed:', error);
        throw error; // Rethrow the error for handling in the calling code
    }
};
