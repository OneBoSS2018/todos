import React from 'react'
import TodoList from "./todo/todoList";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, compleated: false, title: '123124214'},
        {id: 2, compleated: false, title: '123214'},
        {id: 3, compleated: false, title: '3124214'},
    ])


    function  togo (id) {
      setTodos(
          todos.map(todo => {
          if(todo.id === id)
          {
              todo.compleated = !todo.compleated
          }
          return todo
      }))
    }
  return (
      <div className="wrapper">
          <h1>ToDos</h1>
          <TodoList todos={todos} onTogo={togo}/>
    </div>
  )
}

export default App;
