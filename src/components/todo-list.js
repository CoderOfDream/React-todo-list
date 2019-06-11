import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos, onDeleted }) => {

  const elements = todos.map((item) => {
    return <li key={item.id}><TodoListItem label={item.label} important={item.important} onDeleted={() => onDeleted(item.id)} /></li>

  });

  return (
    <ul>
      { elements }
    </ul>
  )
}

export default TodoList;
