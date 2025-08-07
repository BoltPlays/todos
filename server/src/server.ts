import Fastify from 'fastify';
import MongoDb from '@fastify/mongodb';

import getTodosRoute from './routes/todos/get.js';

const fastify = Fastify({
  logger: true,
});

const PORT = 3000;

fastify.register(getTodosRoute, { prefix: '/api/todos' });

fastify.register(MongoDb, {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,

  url: 'mongodb://admin:admin@localhost:27017/todos?authSource=admin'
})

// Run the server!
fastify.listen({ port: PORT }, function (err, _address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
