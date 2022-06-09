import { act, cleanup, renderHook } from "@testing-library/react";
import { useCounter } from "../useCounter";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

describe("useCounter cusyom Hook", () => {
  it("Should increment by 1", () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);
    act(() => {
      {
        result.current.increment();
      }
    });
    expect(result.current.count).toBe(4);
  });

  it("Should decrement by 1", () => {
    const { result } = renderHook(() => useCounter(3));
    act(() => {
      {
        result.current.decrement();
      }
      {
        result.current.increment();
      }
    });
    expect(result.current.count).toBe(3);
  });

  //   it("Should decrement by 1", () => {
  //     const { result } = renderHook(() => useCounter(3));
  //     expect(result.current.count).toBe(3);
  //     act(() => {
  //       {
  //         result.current.decrement();
  //       }
  //     });
  //     expect(result.current.count).toBe(4);
  //   });
});
