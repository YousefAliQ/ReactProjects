import React, { Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Ali"
    }
  }

  onChangeData = () => {
        this.setState({
          userName : this.state.userName === "Ali" ?  "Yousef" : "Ali"
        });
  }
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
        </h4>
        <button className = "btn btn-primary m-2"
          onClick = {this.onChangeData} >
          Click Me
        </button>
      </div>
    )
  }
}