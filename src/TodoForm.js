import React from 'react';

export default class TodoForm extends React.Component {
  state = {
    task: ""
  };

  updateTask = (task) => {
    this.setState({task: task});
  };

  createNewTodo = (e) => {
    e.preventDefault();
    this.props.createNewTodo(this.state.task);
    this.setState({task: ""});
  };

  render() {
    return (
      <form onSubmit={this.createNewTodo}>
        <input value={this.state.task} type="text" onChange={(e) => this.updateTask(e.target.value)} placeholder="Enter Task"></input>
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

