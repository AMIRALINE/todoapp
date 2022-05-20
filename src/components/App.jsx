//import react and hooks
import React, { useState, useContext } from "react";
// import contexts
import todoContext from "../context/TodoContext";
//import components
import Header from "./layout/Header";
import Todoslist from "./todo/todosList";

function App(props) {
  //use hooks
  //states
  let [FormInput, setFormInput] = useState("");
  let [Todos, setTodos] = useState([]);
  let [StatusDone, setStatusDone] = useState(false);
  let [m, setm] = useState(1);
  let [language, setLanguage] = useState("english");
  //methods
  function changeHandler(e) {
    setFormInput(e.target.value);
  }
  function addNewTodo() {
    setTodos((prevState) => {
      return [...prevState, { key: Date.now(), done: false, text: FormInput }];
    });
  }
  function SubmitHandler(e) {
    e.preventDefault();

    addNewTodo();

    setFormInput("");
  }
  return (
    <todoContext.Provider
      value={{
        formInput: FormInput,
        todos: Todos,
        statusDone: StatusDone,
        setTodos,
        m,
        setm,
        language,
        setLanguage,
      }}
    >
      <Header title="Todo App!" />
      <main>
        <section className="jumbotron">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="jumbotron-heading">
              {language !== "english" ? "خوش آمدید!" : "wellcome!"}
            </h1>
            <p className="lead text-muted">
              {language !== "english"
                ? "برای شروع چند ایتم به لیست خود اضافه کنید"
                : "To get started, add some items to your list:"}
            </p>
            <form className="form-inline" onSubmit={SubmitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mx-sm-3"
                  placeholder={
                    language !== "english"
                      ? "من میخواهم ... را انجام دهم"
                      : "i want to do ..."
                  }
                  onChange={changeHandler}
                  value={FormInput}
                />
                <button className="btn btn-primary" type="Submit">
                  {language !== "english" ? "اضافه کردن" : "add"}
                </button>
              </div>
            </form>
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
                    {language !== "english" ? "انجام نشده ها" : "undones"}
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
                    {language !== "english" ? "انجام شده ها" : "dones"}
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
