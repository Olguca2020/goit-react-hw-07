import { createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "./operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const contactsReducer = contactsSlice.reducer;
