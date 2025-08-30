import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

interface AddTodoRequestBody {
  value: string;
}

export const addOneTodoRoute = (fastify: FastifyInstance) => {
  fastify.post('/add-one', {
    handler: async function (
      request: FastifyRequest<{ Body: AddTodoRequestBody }>,
      reply: FastifyReply,
    ) {
      const todosCollection = this.mongo.db?.collection('todos');

      try {
        const result = await todosCollection?.insertOne(request.body);
        reply.code(201);
        return { id: result?.insertedId };
      } catch (err) {
        console.error({ err });
        reply.code(500);
      }
    },
    schema: {
      body: {
        type: 'object',
        required: ['value'],
        properties: {
          value: { type: 'string' },
        },
        additionalProperties: false,
      },
    },
  });
};
