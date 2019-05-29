import React, { Component } from 'react'
import TodoData from './TodoData';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: TodoData
        }
    }
    render() {
        return (
            console.log(this.state),
            <div>
                <div className="header">
                    <h1>My To Do List</h1>
                </div>

                <div className="to-do-list">
                    {this.state.todos.map(todo => {
                        return <TodoItem todo={todo} />
                    })}
                </div>
            </div>
        )
    }
}

export default TodoList

