const TodoData = (props) => {
   //props is a object {}
   // {
   //    name: "Dinhgiaannnn",
   //    age: 21,
   //    data: {}
   // }
   
   //có thể ghi như này
   // const {name, age, data} = props;
   console.log(">>> check props: ", props)
   return (
      <div className='todo-data'>
         <div>My name is {name}</div>
         <div>Learning React</div>
         <div>Being Full-Stack</div>
      </div>
   )
}

export default TodoData