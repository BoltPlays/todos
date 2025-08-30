import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

interface DeleteTodoParams {
  id: string;
}

export const deleteOneTodoRoute = (fastify: FastifyInstance) => {
  fastify.delete(
    '/delete-one/:id',
    async function (
      request: FastifyRequest<{ Params: DeleteTodoParams }>,
      reply: FastifyReply,
    ) {
      const { id } = request.params;
      const ObjectId = this.mongo.ObjectId;
      const todosCollection = this.mongo.db?.collection('todos');

      try {
        todosCollection?.deleteOne({ _id: new ObjectId(id) });
        reply.code(204);
      } catch (err) {
        return err;
      }
    },
  );
};
