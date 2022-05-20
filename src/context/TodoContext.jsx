import { createContext } from "react";

let todoContext = createContext({
  formInput: "",
  todos: [],
  statusDone: false,
  setTodos: () => {},
  m: "",
  setm: () => {},
  language: "english",
  setLanguage: () => {},
});
export default todoContext;
