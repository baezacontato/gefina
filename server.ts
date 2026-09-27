import { createServer } from 'node:http';

import { send } from './send.ts';

createServer(function (request, response) {
    if (request.url === '/api/health' && request.method === 'GET') {
        send(
            response,
            200,
            { status: 'ok' }
        );
        return;
    }

    send(
        response,
        404,
        { message: 'Recurso não encontrado.' }
    );
}).listen(3000);
