//import react and ...
import React, { useState, useContext } from "react";

// import contexts
import todoContext from "../context/TodoContext";
//import components
import Header from "./Header";
import Todoslist from "./todosList";

function App(props) {
  //hook
  let [FormInput, setFormInput] = useState("");
  let [Todos, setTodos] = useState([]);
  let [StatusDone, setStatusDone] = useState(false);
  let { todos } = useContext(todoContext);
  //methods
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
    <todoContext.Provider
      value={{
        formInput: FormInput,
        todos: Todos,
        statusDone: StatusDone,
        setTodos,
      }}
    >
      <Header title="Todo App!" />
      <main>
        <section className="jumbotron">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="jumbotron-heading">Welcome!</h1>
            <p className="lead text-muted">
              To get started, add some items to your list:
            </p>
            <div className="form-inline">
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
            </div>
          </div>
        </section>
        <div className="todosList">
          <div className="container">
            <div className="d-flex flex-column align-items-center ">
              <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className={`nav-item nav-link ${
                      !StatusDone ? "active" : ""
                    } font-weight-bold`}
                    id="nav-home-tab"
                    onClick={(e) => {
                      setStatusDone(false);
                    }}
                  >
                    undone{" "}
                  </button>
                  <button
                    className={`nav-item nav-link ${
                      StatusDone ? "active" : ""
                    } font-weight-bold`}
                    id="nav-profile-tab"
                    onClick={(e) => {
                      setStatusDone(true);
                    }}
                  >
                    done
                  </button>
                </div>
              </nav>
              <Todoslist />
            </div>
          </div>
        </div>
      </main>
    </todoContext.Provider>
  );
}

export default App;
