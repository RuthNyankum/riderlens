import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
  currency: "USD" | "GHS";
  rate: number; // rate of 1 GHS to selected currency
}

const initialState: CurrencyState = {
  currency: "GHS",
  rate: 1, // default for GHS
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<"USD" | "GHS">) => {
      state.currency = action.payload;
      state.rate = action.payload === "USD" ? 0.074 : 1; // manual rate
    },
    setRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload; // update rate manually if needed
    },
  },
});

export const { setCurrency, setRate } = currencySlice.actions;
export default currencySlice.reducer;
