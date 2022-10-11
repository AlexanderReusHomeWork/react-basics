import ToDoItem from "./ToDoItem";

const ToDoContainer = function ({ todoList, setList }) {
  if (!todoList) return;
  const displayTodos = todoList.map((todo) => {
    return (
      <ToDoItem
        key={todo.id}
        title={todo.title}
        description={todo.description}
        id={todo.id}
        todoList={todoList}
        setList={setList}
      />
    );
  });

  return <>{displayTodos}</>;
};

export default ToDoContainer;
