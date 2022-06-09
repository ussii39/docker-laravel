import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./features/customCounter/customCounterSlice";

const Redux = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Redux Integration Test</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count}</span>
        <br />
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>
          IncrementByAmount
        </button>
        <br />

        <input
          type="text"
          placeholder="Enter"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value as never);
          }}
        />
      </div>
    </div>
  );
};

export default Redux;
