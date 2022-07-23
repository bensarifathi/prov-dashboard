import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo.slices";
import navbarSLiceReducer from "./navbar.slices";

const store = configureStore({
  reducer: { todo: todoSlice.reducer, nav: navbarSLiceReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
