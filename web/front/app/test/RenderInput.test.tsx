import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import RenderInput from "../RenderInput";
import userEvent from "@testing-library/user-event";
// const { default: userEvent } = require("@testing-library/user-event");

describe("RenderInput", () => {
  test("Input", () => {
    render(<RenderInput outputConsole={console.log} />);
    // userEvent;
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("Input form onChange event", () => {
  it("shoukd update input value correctly", async () => {
    render(<RenderInput outputConsole={console.log} />);
    const inputValue: HTMLInputElement = screen.getByRole("textbox");
    await userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  });
});

describe("Console button", () => {
  it("should not trigger output funtion", async () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).not.toHaveBeenCalled();
  });

  it("Should trigger output function", async () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("Enter");
    await userEvent.type(inputValue, "test");
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
