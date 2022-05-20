// import contexts
import todoContext from "../../context/TodoContext";
// import components
import TodoItem from "./Todo";
function Todoslist(props) {
  return (
    <todoContext.Consumer>
      {(context) => {
        let filterTodos = context.todos.filter(
          (item) => item.done == context.statusDone
        );
        return (
          <>
            {context.todos.length !== 0 ? (
              filterTodos.map((todo) => (
                <TodoItem
                  key={todo.key}
                  todo={todo}
                  text={todo.text}
                  done={todo.done}
                />
              ))
            ) : (
              <p>you haven't got any todos</p>
            )}
          </>
        );
      }}
    </todoContext.Consumer>
  );
}
export default Todoslist;
