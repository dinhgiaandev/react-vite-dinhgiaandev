import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

  const App = ()  => {
    const [todoList, setTodoList] = useState([
      // {id: 1, name: "holly molly"},
      // {id: 2, name: "holly shit"}
  ])

  const addNewTodo = (name) => {
    const newTodo = {
        id: randomIntFromInterval(1, 1000000),
        name: name
    }
    setTodoList([...todoList, newTodo])
    //array push
 }

  const randomIntFromInterval = (min, max)  => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

  //{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew         
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
            todoList={todoList}
        />
        :
        <div className='todo-image'>
            <img src={reactLogo} className='logo'/>
        </div>
      }



      {/* {todoList.length > 0 &&
        <TodoData
        todoList={todoList}
      />
      }

      {todoList.length === 0 &&
          <div className='todo-image'>
            <img src={reactLogo} className='logo'/>
          </div>
      } */}

    </div>
  )
}

export default App
