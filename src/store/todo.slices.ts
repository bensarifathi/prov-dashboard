import { TodoArrayModel, ApiStatus, ApiError } from "../models/redux.models";
import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, fetchParticularTodo } from "./todo.actions";

const initialTodoState: TodoArrayModel = {
  allTodos: {
    status: ApiStatus.IDLE,
  },
  todo: {
    status: ApiStatus.IDLE,
    data: {
      userId: 0,
      id: 0,
      title: "",
      completed: false,
    },
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.allTodos.status = ApiStatus.PENDING;
      })
      .addCase(fetchTodos.fulfilled, (state, actions) => {
        state.allTodos.status = ApiStatus.SUCCESS;
        state.allTodos.data = actions.payload;
      })
      .addCase(fetchTodos.rejected, (state, actions) => {
        state.allTodos.status = ApiStatus.ERROR;
        state.allTodos.error = actions.payload as ApiError
      })
      .addCase(fetchParticularTodo.pending, (state) => {
        state.todo.status = ApiStatus.PENDING;
      })
      .addCase(fetchParticularTodo.fulfilled, (state, actions) => {
        state.todo.status = ApiStatus.SUCCESS;
        state.todo.data = actions.payload;
      })
      .addCase(fetchParticularTodo.rejected, (state, actions) => {
        state.todo.status = ApiStatus.ERROR;
        state.todo.error = actions.payload as ApiError;
      });
  },
});

export default todoSlice;
