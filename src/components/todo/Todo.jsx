import { useEffect, useState, useContext } from "react";
import todoContext from "../../context/TodoContext";
import EditTodo from "./editTodo";
function TodoItem(props) {
  // hooks and props
  let { todo } = props;
  let TodoContext = useContext(todoContext);
  let { setTodos, todos, setm, m, language } = TodoContext; // get contexts
  let [done, setDone] = useState(todo.done); // state
  let [edit, setEdit] = useState(false);
  let [text, setText] = useState(todo.text);
  useEffect(() => {
    setDone(todo.done);
  });
  let doneHandler = (e) => {
    switch (done) {
      case true:
        todo.done = false;
        setm(m + 1);
        break;
      case false:
        todo.done = true;
        setm(m + 1);
        break;
      default:
        break;
    }
  };
  let deleteHandler = (e) => {
    setTodos(todos.filter((i) => i.key !== todo.key));
  };
  let clickHandler = (e) => {
    setEdit(true);
  };
  return edit ? (
    <EditTodo todo={todo} setText={setText} setEdit={setEdit} />
  ) : (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>{text}</div>
        <div>
          <button
            type="buttun"
            className={`btn ${
              !todo.done ? "btn-success" : "btn-warning"
            } btn-sm`}
            onClick={doneHandler}
          >
            {language !== "english"
              ? `${!todo.done ? "انجام" : "انجام نشده"}`
              : `${!todo.done ? "done" : "undone"}`}
          </button>
          <button
            type="button"
            className="btn btn-info btn-sm ml-1"
            onClick={clickHandler}
          >
            {language !== "english" ? "ویرایش" : "edit"}
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm ml-1"
            onClick={deleteHandler}
          >
            {language !== "english" ? "حذف" : "delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
