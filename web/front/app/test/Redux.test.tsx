import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import Redux from "../Redux";
import { AnyAction, configureStore, Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import customCounterReducer from "../features/customCounter/customCounterSlice";

afterEach(() => {
  cleanup();
});

describe("Redux Interfration Test", () => {
  let store = {} as Store<any, AnyAction>;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  it("Should display value with increment by 1 per click", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(3 as number);
  });

  it("Should display value with incrementByAmount", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.type(screen.getByPlaceholderText("Enter"), "30");
    await userEvent.click(screen.getByText("IncrementByAmount"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(30 as number);
  });
});
