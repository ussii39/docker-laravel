import reducer, {
  increment,
  incrementAsync,
  incrementByAmount,
} from "../features/customCounter/customCounterSlice";

describe("Reducer of ReduxToolKit", () => {
  describe("increment action", () => {
    let initialState = {
      mode: 0,
      value: 1,
      status: undefined,
      username: "",
    };
    it("Should increment by 1 with mode 0", () => {
      const action = {
        type: increment.type,
      };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(2);
    });

    it("Should increment by 100 with mode 1", () => {
      initialState.mode = 1;
      const action = {
        type: increment.type,
      };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    });

    it("Should increment by 200 with mode 1", () => {
      initialState.mode = 2;
      const action = {
        type: increment.type,
      };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(201);
    });
  });

  describe("incrementByAmount action", () => {
    let initialState = {
      mode: 0,
      value: 1,
      status: undefined,
      username: "",
    };
    it("Should incre,ent by payload value with mode 0", () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(4);
    });
    it("Should incre,ent by payload value with mode 1", () => {
      initialState.mode = 1;
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(301);
    });
    it("Should incre,ent by payload value with mode 2", () => {
      initialState.mode = 2;
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(601);
    });
  });
});
