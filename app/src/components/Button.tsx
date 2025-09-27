import { useState } from 'react';

export const Button = () => {
  const [count, setCount] = useState(0);
  console.log('Button render');

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};
