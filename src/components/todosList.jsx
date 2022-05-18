import { useContext } from "react";
import todoContext from "./../context/TodoContext";
import TodoItem from "./Todo";

// function Todoslist(props) {
//   let TodoContext = useContext(todoContext);
//   console.log(todoContext);
//   return <>{"qhuewklew"}</>;
// }
function Todoslist(props) {
  return (
    <todoContext.Consumer>
      {(context) => {
        console.log(context);
        let filterTodos = context.todos.filter(
          (item) => item.done == context.statusDone
        );
        console.log(filterTodos);
        return (
          <>
            {filterTodos.map((todo) => (
              <TodoItem key={todo.key} text={todo.text} done={todo.done} />
            ))}
          </>
        );
      }}
    </todoContext.Consumer>
  );
}
export default Todoslist;
