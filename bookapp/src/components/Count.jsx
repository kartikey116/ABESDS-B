import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  return (
    <div className="count-container">
      <button onClick={decrement}>−</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
