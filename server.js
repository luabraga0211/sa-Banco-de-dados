
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/loja', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createLoja(body);
    return reply.status(201).send();
})

// READE
server.get('/loja', async () => {
    const loja = await databasePostgres.listLoja();
    return loja;
});

// UPDATE
server.put('/loja/:id', async (request, reply) => {
    const lojaID = request.params.id;
    const body = request.body;
    await databasePostgres.updateLoja(lojaID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/loja/:id', async (request, reply) => {
    const lojaID = request.params.id;
    await databasePostgres.deleteLoja(lojaID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
