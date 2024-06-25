import { useState } from "react";

const TodoNew = (props) => {

   //useState hook (getter / setter)
   const [valueInput, setValueInput] = useState("Kato")
   // console.log(">>> check point: ", props)
   // const {addNewTodo} = props;

   // addNewTodo("Kato") //fire: khai hỏa
   const handleClick = () => {
      console.log(">>> check value input: ", valueInput)
   }
   const handleChange = (myName) => {
      setValueInput(myName)
   }
   return (
      <div className='todo-new'>
         <input type="text" className='input-data' placeholder='Enter your task'
            onChange={(event) => {handleChange(event.target.value)}}
         />
         <button className='button-add'
            onClick={handleClick}
         >Add</button>
         <div>
            My text input is: {valueInput}
         </div>
      </div>
   )
}

export default TodoNew;