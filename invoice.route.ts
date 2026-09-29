import express from 'express';

import invoices from './invoice.data.ts';

const routes = express.Router();

routes.get('/', function (request, response) {
    response.status(200).json(invoices);
});

routes.get('/:id', function (request, response) {
    const id = +request.params.id;

    for (let i = 0; i < invoices.length; i = i + 1) {
        if (invoices[i].id === id) {
            response.status(200).json(invoices[i]);
            return;
        }
    }

    response.status(404).json({ error: { message: 'Fatura não encontrada.' } });
});

export default routes;