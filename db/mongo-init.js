db.createUser({
  user: 'user-todos',
  pwd: 'password-todos',
  roles: [{ role: 'readWrite', db: 'todos' }],
});

db.todos.drop();
db.todos.insertMany([
  {
    _id: 1,
    value: 'woof',
  },
  {
    _id: 2,
    value: 'hello',
  },
]);
