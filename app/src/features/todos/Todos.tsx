import { useState } from 'react';

export function Todos() {
  const [todos] = useState<string[]>(['hello', 'world']);

  return (
    <ul>
      {todos.map((todo) => {
        return <li>{todo}</li>;
      })}
    </ul>
  );
}
