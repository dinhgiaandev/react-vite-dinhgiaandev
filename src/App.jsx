import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'

const App = ()  => {
  const Dinhgiaan = "Dinhgiaan";
  const age = 20;
  const data = {
    address: "HCM",
    country: "Vietnam"
  }
  //{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
        name={Dinhgiaan}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'/>
      </div>
    </div>
  )
}

export default App
