import { incrementAsync } from "../features/counter/counterSlice";
import reducer, {
  fetchJson,
} from "../features/customCounter/customCounterSlice";

describe("extraReducers", () => {
  let initialState = {
    mode: 0,
    value: 1,
    status: undefined,
    username: "testUsername",
  };
  it("Should output 1000 + payload when fulfield", () => {
    const action = { type: incrementAsync.fulfilled.type, payload: 5 };
    const satte = reducer(initialState, action);
    expect(satte.value).toEqual(105);
  });
  it("Should output 1000 + payload when fulfield", () => {
    const action = {
      type: fetchJson.fulfilled.type,
      payload: initialState.username,
    };
    const satte = reducer(initialState, action);
    expect(satte.username).toEqual("testUsername");
  });
});
