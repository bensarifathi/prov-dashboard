export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum ApiStatus {
  IDLE,
  PENDING,
  SUCCESS,
  ERROR,
}

export type ApiError = {
  message: string;
  code: number;
};

export type ApiData<DataType = any> = {
  status: ApiStatus;
  error?: ApiError;
  data?: DataType;
};

export interface TodoArrayModel {
  allTodos: ApiData<TodoModel[]>;
  todo: ApiData<TodoModel>;
}
