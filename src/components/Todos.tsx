import { TodoItem } from "./TodoItem";
import classes from "../css/Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  // FC -> Functional Component

  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
