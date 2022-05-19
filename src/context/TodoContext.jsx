import React from "react";

let todoContext = React.createContext({
  formInput: "",
  todos: [],
  statusDone: false,
  setTodos: () => {},
});
export default todoContext;
