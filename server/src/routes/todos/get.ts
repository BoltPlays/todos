import type { FastifyPluginCallback } from 'fastify';

const getTodosRoute: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.get('/get-todos', function (_request, reply) {
    reply.send({ hello: 'world' });
  });

  done();
};

export default getTodosRoute;
