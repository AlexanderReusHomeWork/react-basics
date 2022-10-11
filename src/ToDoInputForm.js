import classes from "./ToDoInputForm.module.css";

const ToDoInputForm = function ({ setList }) {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value) return;
    const todoObject = [
      {
        id: Math.random(),
        title: e.target[0].value,
        description: e.target[1].value,
      },
    ];
    setList((prevState) => [...prevState, ...todoObject]);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <>
      <form type="submit" onSubmit={submitHandler} className={classes.form}>
        <div className={classes.title}>
          <label htmlFor="ttl">Title: </label>
          <input type="text" id="ttl" />
        </div>
        <div className={classes.description}>
          <label htmlFor="desc">Description: </label>
          <input type="text" id="desc" />
        </div>
        <button type="submit" className={classes.btn}>
          Add ToDo
        </button>
      </form>
    </>
  );
};

export default ToDoInputForm;
