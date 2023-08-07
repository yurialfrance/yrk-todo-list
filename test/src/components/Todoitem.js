import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {

    getSyle = () => {
        return{
            background:'#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        };
    };

  render() {
    const {id,title} = this.props.todo;
    return (
      <div style={this.getSyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
            {title}</p>
            <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
              x
            </button>
      </div>
    )
  }
}

//PropTypes

Todoitem.propTypes ={
    todo: PropTypes.object.isRequired
  };

const btnStyle = {
  background: "crimson",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right" 
}

export default Todoitem
