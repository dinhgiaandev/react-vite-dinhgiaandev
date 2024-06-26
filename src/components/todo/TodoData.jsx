const TodoData = (props) => {
  //props is a object {}
  const {todoList, deleteTodo} = props;

  const handleClick = (id) => {
    deleteTodo(id)
  }

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>> check map:", item, index);
        return (
            <div className={`todo-item`} key={item.id}>
              <div> {item.name}</div>
              <button onClick={() => handleClick(item.id)}>Delete</button>
            </div>
        )
      })}
    </div>
  );
};

export default TodoData;
