import React, { FormEvent, useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../../Model";
import { Draggable } from "react-beautiful-dnd";

interface SingleTodoProps {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ index, todo, todos, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  //Handle Done
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //Handle Delete

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Handle Edit

  const handleEdit = (e: FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <Draggable draggableId={todo?.id.toString()} index={index}>
        {(provided) => (
          <form
            onSubmit={(e) => handleEdit(e, todo.id)}
            className="singleTodo max-w-[545px] bg-[white] p-[20px] mt-[15px] rounded-[5px] w-[100%] shodow-lg transition-all hover:scale-[1.03]"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {edit ? (
              <>
                <input
                  ref={inputRef}
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  className=" outline-none text-[20px] font-[500] "
                />
              </>
            ) : (
              <div
                className="todo_text text-[20px] font-[500]"
                style={{
                  textDecoration: todo.isDone ? "line-through" : "auto",
                }}
              >
                {todo?.todo}
              </div>
            )}

            <div className="todo_icons flex items-center justify-end gap-[25px] text-[20px]">
              <span
                className="cursor-pointer"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              >
                <AiFillDelete />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleDone(todo.id)}
              >
                <MdDone />
              </span>
            </div>
          </form>
        )}
      </Draggable>
    </>
  );
};

export default SingleTodo;
