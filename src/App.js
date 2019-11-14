import React, { Component } from "react";

import List from "./List";
import Input from "./Input";
import Title from "./Title";

export default class App extends Component {
  key = 0;
  state = {
    todos: [
      { text: "eat", id: this.key++, completed: false },
      { text: "drink", id: this.key++, completed: false },
      { text: "be merry", id: this.key++, completed: false }
    ]
  };

  onAddTodo = text => {
    const { todos } = this.state;

    this.setState({
      todos: [{ text, id: this.key++, completed: false }, ...todos]
    });
  };

  onToggleTodo = index => {
    const { todos } = this.state;

    console.log("toggle " + index);

    this.setState({
      todos: todos.map((todo, i) => {
        if (todo.id === index) {
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

    const activeTodos = todos.filter(todo => !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);

    return (
      <div style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={activeTodos} onToggleTodo={this.onToggleTodo} />
        <Title>Completed List</Title>
        <List list={completedTodos} onToggleTodo={this.onToggleTodo} />
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
