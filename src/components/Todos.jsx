import React from 'react'
import './Welcome'
import { Todo } from "./Todo"
export const Todos = ({ todos, btnDelete }) => {
    return (
        <>
            <div className='title-component-page'>
                Add Todo
            </div>

            <div className='main margin-top'>
                {todos.length == 0 ?

                    <div className='card center-horizontal red-font'>
                        <h3>Empty Todos</h3>
                    </div>

                    : ""}


                {
                    todos.map((todo) => {
                        return <Todo todo={todo} key={todo.id} btnDelete={btnDelete} />
                    })
                }
            </div>




        </>
    )
}
