import React, { Component } from "react";

import List from "./List";
import Input from "./Input";
import Title from "./Title";

export default class App extends Component {
  state = {
    todos: [
      { text: "eat", completed: false },
      { text: "drink", completed: false },
      { text: "be merry", completed: false }
    ]
  };

  onAddTodo = text => {
    const { todos } = this.state;

    this.setState({
      todos: [text, ...todos]
    });
  };

  onToggleTodo = index => {
    const { todos } = this.state;

    console.log("toggle " + index);

    this.setState({
      todos: todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    });
  };

  onRemoveTodo = index => {
    const { todos } = this.state;
    /*
    this.setState({
      todos: todos.filter((todo, i) => i !== index)
    });
    */
  };

  render() {
    const { todos } = this.state;

    return (
      <div style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onToggleTodo={this.onToggleTodo} />
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  }
};
