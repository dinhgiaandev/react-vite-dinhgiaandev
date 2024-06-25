import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = ()  => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: "holly molly"},
    {id: 2, name: "holly shesh"}
  ])

  const Dinhgiaan = "Dinhgiaan";
  const age = 20;
  const data = {
    address: "HCM",
    country: "Vietnam"
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
 }

  //{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew         
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={Dinhgiaan}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'/>
      </div>
    </div>
  )
}

export default App
