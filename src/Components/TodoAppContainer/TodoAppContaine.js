import React from 'react'
import Todo from '../Todo/Todo'

const TodoAppContaine = ({todos,DeleteTodo,UpdateTodo}) => {

    return (
        <div>
            <ul>
                {todos.map((todo)=><Todo todo={todo} key={todo.id} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo}/>)}
            </ul>
        </div>
    )
}

export default TodoAppContaine
