import http from 'http';
import run from './run';
import setup from './setup';

async function init() {
    const server = http.createServer();
    server.listen(3000);
    console.log('[INFO] Fake Server is running on port 3000 !');

    await setup();
    await run();
}

export default init;