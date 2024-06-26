import { useState } from "react";

const TodoNew = (props) => {

   //useState hook (getter / setter)
   const [valueInput, setValueInput] = useState("Kato")
   const {addNewTodo} = props;
   // addNewTodo("Kato") //fire: khai hỏa
   const handleClick = () => {
      addNewTodo(valueInput);
      setValueInput("");
   }
   const handleChange = (myName) => {
      setValueInput(myName)
   }
   return (
      <div className='todo-new'>
         <input type="text" className='input-data' placeholder='Enter your task'
               onChange={(event) => {handleChange(event.target.value)}}
               value={valueInput}
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