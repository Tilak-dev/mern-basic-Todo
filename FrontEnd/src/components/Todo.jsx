import React from 'react'

function Todo({todos}) {
  return (
    <div>
      {todos.map((todo)=>{
        return <div>
          <h1>{todo.title}</h1>
          <h3>{todo.description}</h3>
          <button className='shadow__btn'>{todo.completed == true ? "Completed" : "Mark as Done"}</button>
        </div>
      })}
    </div>
  )
}

export default Todo