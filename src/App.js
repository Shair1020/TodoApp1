import React from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import TodoAppContaine from "./Components/TodoAppContainer/TodoAppContaine";

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

  render = () => {
    return (
      <div>
        <Header />
        <Form addTodos={this.addTodos} />
        <TodoAppContaine todos={this.state.todos} DeleteTodo={this.DeleteTodo} />
      </div>
    );
  };
}

export default App;
