import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ApiError, TodoModel } from "../models/redux.models";
import TodoService from "../services/toto.services";

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response: TodoModel[] = await TodoService.getAllTodos();
      return response;
    } catch (error) {
      const err = error as AxiosError;
      const errMsg: ApiError = {
        code: Number(err.code),
        message: err.message,
      };
      return rejectWithValue(errMsg);
    }
  }
);

export const fetchParticularTodo = createAsyncThunk(
  "todo/fetchParticularTodo",
  async (todo_id: number, { rejectWithValue }) => {
    try {
      const response: TodoModel = await TodoService.getParticularTodo(todo_id);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
