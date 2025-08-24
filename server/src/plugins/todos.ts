import type { FastifyPluginCallback } from "fastify";
import { getAllTodosRoute } from "../routes/todos/get-all.js";
import { addTodoRoute } from "../routes/todos/add.js";

const todosRoutePlugin: FastifyPluginCallback = (fastify, _options, done) => {
    getAllTodosRoute(fastify);
    addTodoRoute(fastify);
    done();
};

export default todosRoutePlugin;