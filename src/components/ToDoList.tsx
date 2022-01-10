import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
}

const ToDoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
