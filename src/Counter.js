import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleDecrement}>-</button> 
      <button onClick={handleReset}>Reset</button>
    </div>
  );  
}

export default Counter;
