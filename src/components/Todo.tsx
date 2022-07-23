import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { fetchTodos } from "../store/todo.actions";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Todo.css";

const Todo = () => {
  const dispatch = useAppDispatch();
  const { data: alltodos, status } = useAppSelector(
    (state) => state.todo.allTodos
  )!;

  useEffect(() => {
    !alltodos && dispatch(fetchTodos());
  }, [dispatch, alltodos]);

  useEffect(() => {
    console.log(alltodos);
  }, [alltodos]);

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <div>
      <h1>HI Fathi</h1>
      <Button variant="primary" size={"lg"}>
        Button #1
      </Button>
      {/* <div>
                <label>Enter the todo id : </label>
                <input onChange={(event)=>{setTodo_id(parseInt(event.target.value))}} type="number"></input>
                <button onClick={searchHandler}> Find </button>
                <div>
                    <h3>Particular TODO </h3>
                    {
                        checkparticularTodo() &&                                
                        (<div className="todo-container" key={particularTodo.id}>
                            <p className="todo-child1">{particularTodo.id}</p>
                            <p className="todo-child2">{particularTodo.userId}</p>
                            <p className="todo-child3">{particularTodo.title}</p>
                            <p className="todo-child4">{particularTodo.completed}</p>
                        </div>)
                    }

                </div>
            </div>
            <div>
                <button onClick={clickHandler}>All Todos</button>
                <div>
                    <h3>TODO LIST :</h3>
                        <div className="todo-container">
                                    <p className="todo-child1">ID</p>
                                    <p className="todo-child2">USER ID</p>
                                    <p className="todo-child3">TITLE</p>
                        </div>
                        {checkTodo() &&
                            alltodos.map((todo)=>(
                                <div className="todo-container" key={todo.id}>
                                    <p className="todo-child1">{todo.id}</p>
                                    <p className="todo-child2">{todo.userId}</p>
                                    <p className="todo-child3">{todo.title}</p>
                                </div>
                            ))
                        }
                </div>
            </div> */}
    </div>
  );
};
export default Todo;
