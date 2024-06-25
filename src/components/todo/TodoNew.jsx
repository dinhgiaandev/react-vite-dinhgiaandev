
const TodoNew = (props) => {
   console.log(">>> check point: ", props)
   const {addNewTodo} = props;

   // addNewTodo("Kato") //fire: khai hỏa
   const handleClick = () => {
      alert("click me")
   }
   const handleChange = (myName) => {
      console.log(">>> handle onchange", myName)
   }
   return (
      <div className='todo-new'>
         <input type="text" className='input-data' placeholder='Enter your task'
            onChange={(event) => {handleChange(event.target.value)}}
         />
         <button className='button-add'
            onClick={handleClick}
         >Add</button>
      </div>
   )
}

export default TodoNew;