import React from "react";
import { useCounter } from "./useCounter";

const CustomHooks = () => {
  const { count, increment, decrement, double, triple, reset } = useCounter(2);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>増加</button>
      <button onClick={decrement}>減少 </button>
      <button onClick={double}>二倍</button>
      <button onClick={triple}>三倍</button>

      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default CustomHooks;
