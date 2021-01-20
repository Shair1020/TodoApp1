import React from 'react'
import Todo from '../Todo/Todo'

const TodoAppContaine = ({todos,DeleteTodo,UpdateTodo}) => {

    return (
        <div>
            {todos.map((todo)=><Todo todo={todo} key={todo.id} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo}/>)}
        </div>
    )
}

export default TodoAppContaine
