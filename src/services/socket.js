import createSocket from 'socket.io-client';

const { REACT_APP_API_URL } = process.env;

const socket = createSocket(REACT_APP_API_URL);

const connect = (event, callback) => socket.on(event, data => callback(data));

export default connect;
