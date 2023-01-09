import React, { useState } from 'react'


// import CardList from './Delete'


function App() {
   

 





  const [todos, setTodos] = useState(['item 1', 'item 2', 'item 3'])

  function deleteTodo(index) {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (



    <div>
       
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
      {/* <CardList/> */}

    </div>
  )
}

export default App
