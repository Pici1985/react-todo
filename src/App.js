import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuid, } from 'uuid'; // this package is to gen ID`s on the go
import './App.css'

// Import components

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


class App extends Component {
  state = {
    todos: []
  }
  
  // Toggle Complete

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // delete Todo
  delTodo = (id) => { 
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  
  // add Todo
   
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,  // since es6 we can use this instead of title: title
      completed: false
    } 
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
      <Header />
        <div className="App">
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
              </React.Fragment> 
            )} />           
          </div>
        </div>
      <Footer />    
      </Router>
    );
  }
}

export default App;
