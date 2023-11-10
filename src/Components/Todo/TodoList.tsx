import React from "react";
import { Todo } from "../../Model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface TodoListPrpos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListPrpos> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 w-[100%] items-start justify-center gap-[8px] pt-[15px]">
        <Droppable droppableId="active" >
          {(provided) => (
            <div
              className="active_task bg-[#32c3cd] p-[15px] rounded-[5px] flex flex-col items-center justify-center"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="w-[100%] text-[30px] text-white ">
                Active Task
              </span>
              {todos &&
                todos?.map((todo, index) => (
                  <>
                    <SingleTodo
                      index={index}
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                      key={todo?.id}
                    />
                  </>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completed"  >
          {(provided) => (
            <div
              className="completed_task bg-[#eb6750] p-[15px] rounded-[5px] flex flex-col items-center justify-center"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="w-[100%] text-[30px] text-white ">
                Completed Task
              </span>
              {completedTodos &&
                completedTodos?.map((todo, index) => (
                  <>
                    <SingleTodo
                      index={index}
                      todo={todo}
                      todos={completedTodos}
                      setTodos={setCompletedTodos}
                      key={todo?.id}
                    />
                  </>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default TodoList;
