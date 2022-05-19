import { createContext } from "react";

let todoContext = createContext({
  formInput: "",
  todos: [],
  statusDone: false,
  setTodos: () => {},
});
export default todoContext;
