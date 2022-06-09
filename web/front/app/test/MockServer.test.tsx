import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import MockServer from "../MockServer";
import "@testing-library/jest-dom";

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

describe("Mocking API", () => {
  it("[Fetch success]Should display fetched data correctly and button disable", async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole("button"));
    waitFor(async () => {
      // h3タグ内のテキストの内容がBred dummyかどうか
      expect(await screen.findByRole("heading")).toHaveTextContent(
        "Bred dummy"
      );

      //   buttonが特定の状態になっているか
      expect(screen.getByRole("button")).toHaveAttribute("disabled");
    });
  });

  it("[Fetch failure]Should display fetch data correctly and button abled", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(<MockServer />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Fetching Failed !"
    );
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });
});
// https://testing-library.com/docs/queries/byrole/
