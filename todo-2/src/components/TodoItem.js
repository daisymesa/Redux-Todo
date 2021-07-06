import React from 'react'

const TodoItem= (props) => {
    return (
        <div>
            <div className="to-do-item">
                <p>
                {props.todo.value}
                </p>

            </div>

        </div>
    )
}

export default TodoItem
