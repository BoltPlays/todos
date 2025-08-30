import type { FastifyInstance, FastifyPluginCallback } from 'fastify';

export const getAllTodosRoute = (fastify: FastifyInstance) => {
  fastify.get('/get-all', async function () {
    const todosCollection = this.mongo.db?.collection('todos');

    try {
      const todos = await todosCollection?.find({}).toArray();

      return todos;
    } catch (err) {
      return err;
    }
  });
};

// REST API
// Representational State Transfer
// it's an api that you interact or interface with via http(s)

// Request Methods
// GET, POST, PATCH, PUT, DELETE
