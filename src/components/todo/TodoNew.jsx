
const TodoNew = (props) => {
   console.log(">>> check point: ", props)
   const {addNewTodo} = props;

   // addNewTodo("Kato");
   return (
      <div className='todo-new'>
         <input type="text" className='input-data' placeholder='Enter your task'/>
         <button className='button-add'>Add</button>
      </div>
   )
}

export default TodoNew;