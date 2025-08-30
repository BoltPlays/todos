import type { FastifyPluginCallback } from 'fastify';

import { getAllTodosRoute } from '../routes/todos/get-all.js';
import { addOneTodoRoute } from '../routes/todos/add-one.js';
import { deleteOneTodoRoute } from '../routes/todos/delete-one.js';

const todosRoutePlugin: FastifyPluginCallback = (fastify, _options, done) => {
  getAllTodosRoute(fastify);
  addOneTodoRoute(fastify);
  deleteOneTodoRoute(fastify);
  done();
};

export default todosRoutePlugin;
