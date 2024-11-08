
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

// ENDPOINTS (CRUD) DE FUNCIONARIOS:

// CREATE
server.post('/Funcionarios', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createFuncionarios(body);
    return reply.status(201).send();
})

// READE
server.get('/Funcionarios', async () => {
    const Funcionarios = await databasePostgres.listFuncionarios();
    return Funcionarios;
});

// UPDATE
server.put('/Funcionarios/:matricula', async (request, reply) => {
    const FuncionariosID = request.params.matricula;
    const body = request.body;
    await databasePostgres.updateFuncionarios(FuncionariosID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/Funcionarios/:matricula', async (request, reply) => {
    const FuncionariosID = request.params.matricula;
    await databasePostgres.deleteFuncionarios(FuncionariosID);

    return reply.status(204).send();
})

// ENDPOINTS (CRUD) DE ENTRADA E SAIDA

// CREATE
server.post('/entradasaida', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createEntradaSaida(body);
    return reply.status(201).send();
})

// READE
server.get('/entradasaida', async () => {
    const EntradaSaida = await databasePostgres.listEntradaSaida();
    return EntradaSaida;
});

// UPDATE
server.put('/entradasaida/:idEntradaSaida', async (request, reply) => {
    const EntradaSaidaID = request.params.idEntradaSaida;
    const body = request.body;
    await databasePostgres.updateEntradaSaida(EntradaSaidaID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/entradasaida/:idEntradaSaida', async (request, reply) => {
    const EntradaSaidaID = request.params.idEntradaSaida;
    await databasePostgres.deleteEntradaSaida(EntradaSaidaID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
