import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollapseModel } from "../models/navbar.modesl";

const initialCollapseState: CollapseModel = {
  isOpen: true,
};

const collapseSlice = createSlice({
  name: "collapse",
  initialState: initialCollapseState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggle } = collapseSlice.actions;
export default collapseSlice.reducer;
