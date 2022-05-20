import todoContext from "../../context/TodoContext";
import { useContext } from "react";
function editTodo(props) {
  let { setText, text, setEdit } = props;
  let { language } = useContext(todoContext);
  let changeHandler = (e) => {
    setText(e.target.value);
  };
  let submitHandler = (e) => {
    e.preventDefault();
    setEdit(false);
  };
  return (
    <form className="col-6 mb-2" onSubmit={submitHandler}>
      <div
        className={`d-flex ${
          language !== "english" ? "flex-row-reverse" : ""
        } justify-content-between align-items-center border rounded p-3`}
      >
        <div>
          <input type="text" value={text} onChange={changeHandler} />
        </div>
        <div>
          <button className="btn btn-info btn-sm ml-1" type="submit">
            {language !== "english" ? "ویرایش" : "edit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default editTodo;
