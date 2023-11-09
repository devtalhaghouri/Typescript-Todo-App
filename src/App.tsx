import React, { useState, useEffect, FormEvent } from "react";
import "./App.css";
import TextField from "./Components/TextField/TextField";
import { Todo } from "./Model";
import TodoList from "./Components/Todo/TodoList";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  //Handle Add Todo
  const handleAdd = (e: FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  useEffect(() => {
    setLocalStorage("todos", todos);
  }, [todos]);

  const data = getLocalStorage("todos");

  useEffect(() => {
    setTodos(data);
  }, []);

  return (
    <>
      <div id="App" className="bg-[#2F74C0] h-[100vh] w-[100%] ">
        <div className="app_container max-w-[1200px] mx-auto px-[15px] py-[20px]">
          <div className="heading w-[100%] text-center text-[white] font-mono font-medium text-[40px]">
            <h1>Taskify</h1>
          </div>

          <TextField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};

export default App;
