import React from "react";
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component {
  state = {
    todoInput: "",
  };
  onChange = (e) => {
    var value = e.target.value;
    console.log(value);
    this.setState({
      todoInput: value,
    });
  };
  onSubmit=(e)=>{
    e.preventDefault();
    var todoObj={
        description:this.state.todoInput,
        id:uuidv4()
    }
    console.log(todoObj);
    this.props.addTodos(todoObj);
  }
  render = () => {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="Enter a Todo " onChange={this.onChange} value={this.state.todoInput} />
          <button>Add</button>
        </form>
      </div>
    );
  };
}

export default Form;
