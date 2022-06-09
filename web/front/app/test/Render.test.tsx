import { render, screen } from "@testing-library/react";
import Render from "../Render";

describe("Rendering", () => {
  test("should", () => {
    render(<Render />);
    // screen.debug();
    // https://github.com/A11yance/aria-query#elements-to-roles
    // screen.debug(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    // screen.debug(screen.getByText("Udemy"));
    expect(screen.getByTestId("spanTest")).toBeTruthy();
  });
});
