import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { AnyAction, configureStore, Store } from "@reduxjs/toolkit";
import customCounterReducer from "../features/customCounter/customCounterSlice";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ReduxAsync from "../ReduxAsync";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

describe("ReduxAsyncApi API MOCKING", () => {
  let store = {} as Store<any, AnyAction>;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  it("[Fetch sucess] Should display username in h3 tag", async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    // 存在しないことを確認する。
    expect(screen.queryByRole("heading")).toBeNull();
    await userEvent.click(screen.getByText("fetch Json"));
    expect(await screen.findByText("Bred dummy")).toBeInTheDocument();
  });

  it("[Fetch failed] Should display anonymous in h3 tag", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    // 存在しないことを確認する。
    expect(screen.queryByRole("heading")).toBeNull();
    await userEvent.click(screen.getByText("fetch Json"));
    expect(await screen.findByText("anonymous")).toBeInTheDocument();
  });
});
