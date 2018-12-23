import Server from './server';
import debug from './debug';

const server = new Server();
server.start();
process.stdout.write('starting server');

process.title = 'monopoly-server';

process.on('exit', () => {
    debug('on exit');
    server.close();
});

process.on('SIGINT', () => {
    debug('on siginit');
    server.close();
    process.exit();
});