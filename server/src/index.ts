import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

const PORT: number = 3000;

// Declare a route
fastify.get('/', function (_request, reply) {
  reply.send({ hello: 'world' });
});

// Run the server!
fastify.listen({ port: PORT }, function (err, _address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
