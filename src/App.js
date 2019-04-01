import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

class App extends Component {

  state = {
    query: '',
    tasks: [],
  };

  updateQuery = query => {
    this.setState({ query });
  };

  addTask = e => {
    e.preventDefault();
    let tasks = [...this.state.tasks];
    let newTask = { name: this.state.query, id: uuid.v4() }
    tasks.unshift(newTask);
    this.setState({ tasks, query: '' });
  };

  deleteTask = (id) => {
    let tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App" >
        <div className="todo">
          <form onSubmit={event => this.addTask(event)}>
            <label htmlFor="new-task" className="hide">New task</label>
            <div>
              <input type="text"
                id="new-task"
                name="new-task"
                className="input"
                placeholder="New task"
                value={this.state.query}
                onChange={event => this.updateQuery(event.target.value)}
              ></input>
              <button type="submit">→</button>
            </div>
          </form>
          {this.state.tasks.length > 0 ? (
            <ul>
              {this.state.tasks.map(item => (
                <li key={item.id} className="todo-item">{item.name} <button onClick={() => this.deleteTask(item.id)}>x</button></li>
              ))}
            </ul>
          ) : <p>No tasks</p>}
        </div>
      </div>
    );
  }
}

export default App;