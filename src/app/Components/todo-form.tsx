"use client";
import { useTodoStore } from "../use-todo-store";
import TodoComponent from "./todo-component";

function TodoForm() {
  const { addTodo, value, setValue } = useTodoStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    
    addTodo({
      id: Date.now(),
      text: value,
      completed: false,
    });
  
    setValue("");

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-4 p-5 rounded-md bg-rose-200"
      >
        <input
          type="text"
          className="p-3 rounded-md"
          placeholder="Add a todo"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" className="bg-green-300 p-3 rounded-md">
          Add todo
        </button>
      </form>

      <TodoComponent />
    </div>
  );
}

export default TodoForm;
