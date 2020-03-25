import React, { Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Ali",
      todoItems: [{ action: "Buy flowers", done: false },
      { action: "Get Shoes", done: false },
      { action: "Collect Tickets", done: true },
      { action: "Call Yousef", done: false }],
      nextItemText: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ nextItemText: event.target.value });
  }

  createNewTodo = () => {
    if (!this.state.todoItems
      .find(item => item.action === this.state.nextItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems,
        { action: this.state.nextItemText, done: false }],
        nextItemText: ""
      })
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems:
      this.state.todoItems.map(item => item.action === todo.action
        ? { ...item, done: !item.done } : item)
  });

  todoTableRows = () => this.state.todoItems.map(item =>
    <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input type="checkbox" checked={item.done} 
            onChange={() => this.toggleTodo(item)} />
      </td>
    </tr>
  );

  render = () => {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
          ( {this.state.todoItems.filter(item => !item.done).length} items to do )
        </h4>

        <div class="container-fluid">
          <div className="my-1">
            <input className="form-control"
              value={this.state.nextItemText}
              onChange={this.updateNewTextValue} />

            <button className="btn btn-primary mt-1"
              onClick={this.createNewTodo}>
              Add
            </button>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th> <th>Done</th></tr>
            </thead>
            <tbody> {this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    )
  }
}