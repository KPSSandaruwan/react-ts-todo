import React, { useState } from "react";
import Todos from "./components/Todos";
import "./App.css";
import { Todo } from "./models/todo";
import { NewTodo } from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const NewTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(NewTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
