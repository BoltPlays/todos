import type { FastifyPluginCallback } from 'fastify';

const getTodosRoute: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.get('/get-todos', async function (request, reply) {
    const todosCollection = this.mongo.db?.collection('todos');

    try {
      const todos = await todosCollection?.find({}).toArray();

      return todos;
    } catch (err) {
      return err;
    }
  });

  done();
};

export default getTodosRoute;
