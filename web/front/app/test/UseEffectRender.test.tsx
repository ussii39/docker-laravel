import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "../UseEffectRender";
import "@testing-library/jest-dom";

describe("useEffect rendering", () => {
  it("Should render only after async resolved", async () => {
    render(<UseEffectRender />);
    // からのオブジェクトであることを判断する
    expect(screen.queryByText(/I am/)).toMatchObject({});
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
