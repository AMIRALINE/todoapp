import { useEffect, useState } from "react";
function TodoItem(props) {
  let { text } = props;
  let [done, setDone] = useState(props.done);
  useEffect(() => {
    setDone(props.done);
  });
  let doneHandler = (e) => {
    if (done === true) {
      props.done = false;
    } else {
      props.done = true;
    }
  };
  let deleteHandler = (e) => {};
  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>{text}</div>
        <div>
          <button
            type="buttun"
            className={`btn ${
              !props.done ? "btn-success" : "btn-warning"
            } btn-sm`}
            onClick={doneHandler}
          >
            {!props.done ? "done" : "on done"}
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
