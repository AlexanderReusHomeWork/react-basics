import ToDoInputForm from "./ToDoInputForm";
import ToDoContainer from "./ToDoContainer";
import classes from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todoList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className={classes.App}>
      <ToDoInputForm setList={setTodoList} />
      <ToDoContainer todoList={todoList} setList={setTodoList} />
    </div>
  );
}

export default App;

//Создать ToDo, в нем complete и delete сделать, также использовать localeStorage для сохранения тудушек
