import React, { useState } from "react";
import "./App.css";
import TextField from "./Components/TextField/TextField";
import { Todo } from "./Model";
import TodoList from "./Components/Todo/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  //Handle Add Todo
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    console.log(result);

    const { destination, source } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let active = todos,
      complete = completedTodos;

    if (source.droppableId === "active") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "active") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(add);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div id="App" className="bg-[#2F74C0] h-[100vh] w-[100%] ">
          <div className="app_container max-w-[1200px] mx-auto px-[15px] py-[20px]">
            <div className="heading w-[100%] text-center text-[white] font-mono font-medium text-[40px]">
              <h1>Taskify</h1>
            </div>

            <TextField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

            <TodoList
              todos={todos}
              setTodos={setTodos}
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
