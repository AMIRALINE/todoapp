import { useEffect, useState, useContext } from "react";
import todoContext from "./../context/TodoContext";
function TodoItem(props) {
  let { todo } = props;
  let TodoContext = useContext(todoContext);
  let { setTodos, todos } = TodoContext;
  let [done, setDone] = useState(todo.done);
  useEffect(() => {
    setDone(todo.done);
  });
  let doneHandler = (e) => {
    if (done === true) {
      todo.done = false;
    } else {
      todo.done = true;
    }
  };
  let deleteHandler = (e) => {
    setTodos(todos.filter((i) => i.key !== todo.key));
  };
  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>{todo.text}</div>
        <div>
          <button
            type="buttun"
            className={`btn ${
              !todo.done ? "btn-success" : "btn-warning"
            } btn-sm`}
            onClick={doneHandler}
          >
            {!todo.done ? "done" : "on done"}
          </button>
          <button type="button" className="btn btn-info btn-sm ml-1">
            edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm ml-1"
            onClick={deleteHandler}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
