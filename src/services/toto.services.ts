import Api from "./api";
import { TodoModel } from "../models/redux.models";

const todoService = {
  async getAllTodos() {
      var response = await Api.get("todos");
      return response.data;
  },
  async getParticularTodo(todo_id: number) {
    try {
      var response = await Api.get("todos");
      return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
    } catch (error) {
      throw error;
    }
  },
};

export default todoService;
