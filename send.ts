import { ServerResponse } from 'node:http';

export function send(
    response: ServerResponse,
    status: number,
    body: unknown
): void {
    response.writeHead(
        status,
        { 'content-type': 'application/json' }
    );
    response.end(JSON.stringify(body));
}
