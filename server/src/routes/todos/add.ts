import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

interface Todo {
    value: string;
}

export const addTodoRoute = (fastify: FastifyInstance) => {
    fastify.post('/add', {
        handler: async function (request: FastifyRequest<{ Body: Todo }>, reply: FastifyReply) {
            const todosCollection = this.mongo.db?.collection('todos');

            try {
                const result = await todosCollection?.insertOne(request.body);
                reply.code(201);
                return { id: result?.insertedId }
            }
            catch (err) {
                console.error({ err });
                reply.code(500);
            }
        }, schema: {
            body: {
                type: 'object',
                required: ['value'],
                properties: {
                    value: { type: 'string' }
                },
                additionalProperties: false
            }
        }
    });
}