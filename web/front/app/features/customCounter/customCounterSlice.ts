import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store/store";
import axios from "axios";
import { fetchCount } from "../counter/counterAPI";

export interface CounterState {
  value: number;
  mode: number;
  username?: string;
  status?: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  mode: 0,
  username: "",
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number): Promise<number> => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchJson = createAsyncThunk<Promise<string>, undefined, {}>(
  "fetch/api",
  async (_, { rejectWithValue }): Promise<string> => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    const { username } = res.data;
    return username;
  }
);

export const customCounterSlice = createSlice({
  name: "customCounter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 200;
          break;
        default:
          break;
      }
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += 100 * action.payload;
          break;
        case 2:
          state.value += 200 * action.payload;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        incrementAsync.fulfilled,
        (state: CounterState, action: PayloadAction<number>) => {
          state.value = 100 + action.payload;
        }
      )
      .addCase(incrementAsync.rejected, (state: CounterState, action: any) => {
        state.value = 100 - action.payload;
      })
      .addCase(fetchJson.fulfilled, (state, action: any) => {
        state.username = action.payload;
      })
      .addCase(fetchJson.rejected, (state, action: any) => {
        state.username = "anonymous";
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  customCounterSlice.actions;

export const selectCount = (state: RootState) => state.customCounter.value;
export const selectUsername = (state: RootState) =>
  state.customCounter.username;

export default customCounterSlice.reducer;
