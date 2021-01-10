import socketio from 'socket.io-client';

const socket = socketio('http://192.168.43.144:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFuction){
    socket.on('new-dev', subscribeFuction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};