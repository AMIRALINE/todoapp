import todoContext from "../../context/TodoContext";
function FormAddTodo(props) {
  let TodoContext = todoContext;
  let changeHandler = (e) => {
    setFormInput(e.target.value);
    console.log(FormInput);
  };
  let SubmitHandler = (e) => {
    e.preventDefault();

    setTodos((prevState) => {
      return [...prevState, { key: Date.now(), done: false, text: FormInput }];
    });

    setFormInput("");
  };
  return (
    <form className="form-group" onSubmit={SubmitHandler}>
      <input
        type="text"
        className="form-control mx-sm-3"
        placeholder="i want to do ..."
        onChange={changeHandler}
        value={FormInput}
      />
      <button className="btn btn-primary" type="Submit">
        add
      </button>
    </form>
  );
}

export default FormAddTodo;
