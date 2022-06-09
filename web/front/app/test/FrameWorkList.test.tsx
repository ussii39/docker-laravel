import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import FrameWorkList from "../FrameWorkList";
import "@testing-library/jest-dom";

afterEach(() => cleanup());

describe("Rendering the list with props", () => {
  it("Should render No data ! when no data propped", () => {
    render(<FrameWorkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("Should render list item correctly", () => {
    const dummyData = [
      { id: 1, item: "React Dummy" },
      { id: 2, item: "Angular Dummy" },
      { id: 3, item: "Vue.js Dummy" },
    ];
    render(<FrameWorkList frameworks={dummyData} />);
    const frameWorkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((item) => item.item);
    expect(frameWorkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
