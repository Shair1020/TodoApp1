import React from 'react'
import Todo from '../Todo/Todo'

const TodoAppContaine = ({todos,DeleteTodo}) => {

    return (
        <div>
            {todos.map((todo)=><Todo todo={todo} key={todo.id} DeleteTodo={DeleteTodo}/>)}
        </div>
    )
}

export default TodoAppContaine
