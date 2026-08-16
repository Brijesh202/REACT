import React, { useState } from 'react'

export default function About(){
    const [todoList, setTodoList] = useState([])
    return(
        <>
         <h1 className='text-xl'>We are procoders</h1>
         <button onClick={() => {
            import('./data').then((module) => setTodoList(module.todos))
         }}>Load Data</button>
         <ul>
            {
                todoList.map((todo) => <li key={todo.id}>{todo.title}</li>)
            }
         </ul>
        </>
    )
}