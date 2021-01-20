import React from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import TodoAppContaine from "./Components/TodoAppContainer/TodoAppContaine";
import "./App.css"

class App extends React.Component {
  state = {
    todos: [],
  };

  addTodos = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };
  DeleteTodo = (todoid) => {
    var filteredtodos = this.state.todos.filter((todo) => todo.id !== todoid);
    this.setState({
      todos: filteredtodos,
    })
  };
  UpdateTodo=(todoid)=>{
    console.log(todoid)
  }
  render = () => {
    return (
      <div className="App">
        <Header />
        <Form addTodos={this.addTodos} />
        <TodoAppContaine todos={this.state.todos} DeleteTodo={this.DeleteTodo} UpdateTodo={this.UpdateTodo} />
      </div>
    );
  };
}

export default App;
