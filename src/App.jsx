import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'

  const App = ()  => {
    const [todoList, setTodoList] = useState([

  ])

  const addNewTodo = (name) => {
    const newTodo = {
        id: randomIntFromInterval(1, 1000000),
        name: name
    }
    setTodoList([...todoList, newTodo])
 }

  const randomIntFromInterval = (min, max)  => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

 const deleteTodo = (id) => {
    const takeTodo = todoList.filter(item => item.id !== id)
    setTodoList(takeTodo)
 }

  //{key:value}
  return (
    <>
    <Header />
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew         
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
        />
        :
        <div className='todo-image'>
            <img src={reactLogo} className='logo'/>
        </div>
      }
    </div>
    <Outlet/>
    <Footer />
    </>
  )
}

export default App
