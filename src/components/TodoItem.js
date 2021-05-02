import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
       return {
         background: '#f4f4f4',
         padding: '10px',
         borderBottom: '1px #ccc solid ',
         borderLeft: '1px #ccc solid ',
         borderRight: '1px #ccc solid ',      
         textDecoration: this.props.todo.completed ? 'line-through' : 'none',
         width: '50%',
         margin: '0px auto' 
       }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)}/> {' '}
                    { title } 
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} className="deletebutton"> Delete </button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: 'green',
    color: 'white',
    border: 'none',
    padding: '2px 10px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right',
    boxShadow: '2px 2px #333',
} 



// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }


export default TodoItem
