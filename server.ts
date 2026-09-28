// import { createServer } from 'node:http';

// import { send } from './send.ts';

// createServer(function (request, response) {
//     if (request.url === '/api/health' && request.method === 'GET') {
//         send(
//             response,
//             200,
//             { status: 'ok' }
//         );
//         return;
//     }

//     send(
//         response,
//         404,
//         { message: 'Recurso não encontrado.' }
//     );
// }).listen(3000);

import express from 'express';

const app = express();

app.use(function (request, _response, next) {
    console.log(`${request.method} ${request.url}`);
    next();
});

app.get('/api/health', function (_request, response) {
    response.status(200).json({ status: 'ok' });
});

app.use(function (_request, response) {
    response.status(404).json({ error: { message: 'Recurso não encontrado.' } });
});

app.listen(3000);
