import React from 'react';
import './TodoList.css';
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component {
  id = 0;

  state = {
    todos: []
  }

  completeTodo = todo => {
    const index = this.state.todos.findIndex(todoEle => todoEle === todo);

    this.setState(currentState => ({
      todos: [
        ...currentState.todos.slice(0, index),
        {...currentState.todos[index], completed: true},
        ...currentState.todos.slice(index+1)
      ]
    }));
  }

  removeTodo = (todo) => {
    this.setState(currentState => ({
      todos: currentState.todos.filter(todoEle => todoEle !== todo)
    }))
  }

  createNewTodo = task => {
    this.setState(prevState => ({
      todos: [{task: task, completed: false, id: this.id++}, ...prevState.todos]
    }))
  }

  render() {
    const completedTodos = this.state.todos.filter(todo => todo.completed);
    const incompleteTodos = this.state.todos.filter(todo => !todo.completed);


    return (
      <>
        <TodoForm createNewTodo={this.createNewTodo}/>
        <div className="todos">
          {incompleteTodos.length > 0 && <h2 className="incomplete">Incomplete</h2> }
          {
            incompleteTodos.map(todo => (
              <Todo key={todo.id} removeTodo={this.removeTodo} completeTodo={this.completeTodo} todo={todo}/>
            ))
          }

          {completedTodos.length > 0 && <h2 className="incomplete">Completed</h2>}
          {
            completedTodos.map(todo => (
              <Todo key={todo.id} completeTodo={this.completeTodo} todo={todo}/>
            ))
          }
        </div>
      </>
    )
  }

}

export default TodoList;
