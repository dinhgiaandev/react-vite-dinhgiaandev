const TodoData = (props) => {
  //props is a object {}
  // {
  //    name: "Dinhgiaannnn",
  //    age: 21,
  //    data: {}
  // }

  //có thể ghi như này
  const { todoList } = props;
  console.log(">>> check props: ", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>> check log:", item, index);
        return (
          <div className="todo-item">
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
