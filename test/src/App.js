import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Todos from './components/Todos';
import Header from './components/layout/header';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Javascriptを勉強する',
        completed: false,
      },
      {
        id: uuidv4(),
        title: '別のプロジェクトを作成する',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'プロジェクトのプレゼンテーション',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // Toggle the completed status
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  h3Style = () => {
    return{
        color:'#eb0c52',
        marginTop:"1rem",
        marginBottom: "1rem",
        textAlign:"center"
    };
};

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes> 
            <Route
            exact
              path="/ReactApp" 
              element={ 
                <React.Fragment>

                  <div className='test' style={this.h3Style()}>
                  <h3>This is just a test</h3>
                  <p>これは単なるテストです</p>
                  </div>

                  <div className='container'>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </div>
                </React.Fragment>
              }
            />
            <Route path="/about" element={<About />} /> {/* Use 'element' prop for About component */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
