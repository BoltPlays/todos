import Fastify from 'fastify';

import getTodosRoute from './routes/todos/get.js';

const fastify = Fastify({
  logger: true,
});

const PORT: number = 3000;

fastify.register(getTodosRoute, { prefix: '/api/todos' });

// Run the server!
fastify.listen({ port: PORT }, function (err, _address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
