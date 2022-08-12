import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { useTodos } from "../hooks"

export const TodoApp = () => {

  const {
    handleNewTodo,
    todosCount,
    pendingTodosCount,
    handleToggleTodo,
    handleDeleteTodo,
    todos
  } = useTodos();

  // todos.filter(todo => !todo.done).length
  
  return (
    <>
      <h1>
        TodoApp: {todosCount},
        <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )

}
