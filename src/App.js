import React, { Component } from 'react';
import Header from './components/header';
import TodoList from './components/todo-list';
import Search from './components/search';
import AddItem from './components/add-item';
import './App.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'first', important: false, id: 1 },
      { label: 'second', important: false, id: 2 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArr = [...before, ...after];

      return {
        todoData: newArr
      }
    })
  }

  addItem = (text) => {

    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {

      const newArr = [...todoData, newItem];

      return {
        todoData: newArr
      }
    })
  }

  search(items, term) {
    if(term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    })
  }

  render() {

    const { todoData, term } = this.state;

    return (
      <div className="wrapper" >
        <Header />
        <Search />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddItem onItemAdded={this.addItem} />
      </div>
    );
  }
}

