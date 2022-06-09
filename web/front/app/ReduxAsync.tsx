import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import {
  selectCount,
  fetchJson,
  incrementAsync,
  selectUsername,
} from "./features/customCounter/customCounterSlice";

const ReduxAsync = () => {
  const count = useSelector(selectCount);
  const username = useSelector(selectUsername);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      {/* <span data-testid="count-value">{count}</span>
      <button
        onClick={() => {
          //   dispatch(incrementAsync(5));
        }}
      ></button> */}
      <div>{username && <h1>{username}</h1>}</div>
      <button
        onClick={() => {
          dispatch(fetchJson());
        }}
      >
        fetch Json
      </button>
    </div>
  );
};

export default ReduxAsync;
