import { useEffect, useState } from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem = function ({ title, description, id, todoList, setList }) {
  const [isAccomplished, setIsAccomplished] = useState(() => {
    return JSON.parse(localStorage.getItem(`${id}`)) || false;
  });

  useEffect(() => {
    localStorage.setItem(`${id}`, JSON.stringify(isAccomplished));
  }, [id, isAccomplished]);

  const accomplishedHandler = () => {
    setIsAccomplished(!isAccomplished);
  };

  const deleteHandler = () => {
    const listWithoutDeletedEl = todoList.filter((elem) => elem.id !== id);
    setList(listWithoutDeletedEl);
    localStorage.removeItem(`${id}`);
  };

  const accomplishedParagraphStyle = isAccomplished
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  const accomplishedHeaderStyle = isAccomplished
    ? { color: "rgb(201 201 201)" }
    : { color: "#fff" };
  const accomplishedItemStyle = isAccomplished
    ? { backgroundColor: "#47de10" }
    : { backgroundColor: "#16918e" };

  return (
    <div className={classes.todoItem} style={accomplishedItemStyle}>
      <div>
        <h2 style={accomplishedHeaderStyle}>{title}</h2>
        <p style={accomplishedParagraphStyle}>{description}</p>
      </div>
      <div className={classes.buttonsContainer}>
        {!isAccomplished && (
          <button
            className={classes.accomplished}
            onClick={accomplishedHandler}
          >
            Accomplished
          </button>
        )}
        <button className={classes.delete} onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
