import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { store } from "../store/store";

// export type CounterState = {
//   value: number;
// };

// const initialState: CounterState = { value: 0 };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment(state: any) {
//       console.log(state.value);
//       state.value++;
//     },
//   },
// });

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
