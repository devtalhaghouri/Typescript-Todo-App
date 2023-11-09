import React from "react";
import { Todo } from "../../Model";
import SingleTodo from "./SingleTodo";

interface TodoListPrpos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListPrpos> = ({ todos, setTodos }) => {
  return (
    <>
      <div className="grid grid-cols-2 w-[100%] items-center justify-center">
        {todos &&
          todos?.map((todo) => (
            <>
              <SingleTodo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo?.id}
              />
            </>
          ))}
      </div>
    </>
  );
};

export default TodoList;
