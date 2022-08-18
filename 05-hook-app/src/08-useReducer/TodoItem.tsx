type Props = {
  onDeleteTodo(id:number): void,
  onToggleTodo(id:number): void,
  todo: {
    description: "",
    id: number
    done: false | true
  }
}

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }:Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${ todo.done ? "text-decoration-line-through" : ""}`}
        onClick={ () => onToggleTodo(todo.id) }
        aria-label="span"
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={ () => onDeleteTodo(todo.id) }
      >
        Borrar
      </button>
    </li>
  )
}
