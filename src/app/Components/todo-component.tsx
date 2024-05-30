import React from "react";
import { useTodoStore } from "../use-todo-store";

function TodoComponent() {
  const { removeTodo, toggleTodo, todos } = useTodoStore();
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between max-w-sm w-full space-x-4 p-4 bg-slate-200 "
        >
          <h1
            onClick={() => toggleTodo(todo.id)}
            className={`font-bold ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </h1>
          <button
            onClick={() => removeTodo(todo.id)}
            className="bg-rose-400 rounded-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoComponent;
