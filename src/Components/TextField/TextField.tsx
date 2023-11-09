import React from "react";

interface TextFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const TextField: React.FC<TextFieldProps> = ({ todo, setTodo, handleAdd }) => {
  return (
    <>
      <form className="w-[100%]  mx-auto" onSubmit={handleAdd}>
        <div className="w-[100%] relative overflow-hidden bg-[white] rounded-[50px] flex items-center justify-center ">
          <input
            type="text"
            name="text"
            id="todo"
            placeholder="Add a Task"
            className="w-[100%] py-[16px] px-[30px] outline-none text-[25px] text-[black] placeholder:text-[#000000b0]"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button
            type="submit"
            className="absolute right-[0px]  text-[15px] text-[white] bg-[#2f74c0] rounded-[50px] h-[50px]  w-[50px] m-[17px] active:bg-black  "
            style={{
              transition: "all .2s",
              boxShadow: "0 0 10px #000",
            }}
          >
            Go
          </button>
        </div>
      </form>
    </>
  );
};

export default TextField;
