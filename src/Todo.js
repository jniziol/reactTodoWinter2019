import React from 'react';

export default function Todo(props) {

  let completeButton = "";

  if(!props.todo.completed) {
    completeButton = <button onClick={() => props.completeTodo(props.todo)}>Complete</button>
  }

  return (
    <div className="todo">
      <span className="task">{props.todo.task}</span>
      {completeButton}
      {!props.todo.completed && <button onClick={() => props.removeTodo(props.todo)}>Delete</button>}
    </div>
  )
}