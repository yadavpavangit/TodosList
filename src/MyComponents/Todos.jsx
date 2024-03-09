import React from 'react'
import TodoItems from './TodoItems'

function Todos(props) {
  return (
    <div className='container'>
      <h3 className='my-5'>Todos List</h3>
      {
        props.todos.length===0 ? "No todos to display" :
        props.todos.map((todo) => {
          return(
            <>
              <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
            </>
          )
        })
      }


    </div>
  );
}

export default Todos