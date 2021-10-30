import React from 'react';
import classes from '../css/TodoItem.module.css'

export const TodoItem: React.FC<{ todoText: string; onRemoveTodo: () => void }> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo} >{props.todoText}</li>;
};
