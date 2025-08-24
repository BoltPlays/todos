db.createUser({
  user: 'user-todos',
  pwd: 'password-todos',
  roles: [{ role: 'readWrite', db: 'todos' }],
});

db.todos.drop();
db.todos.insertMany([
  {
    value: 'woof',
  },
  {
    value: 'hello',
  },
]);
