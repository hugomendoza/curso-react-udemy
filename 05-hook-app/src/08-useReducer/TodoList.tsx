import { TodoItem } from "./TodoItem"

type TodoListProps = {
  onDeleteTodo(): void;
  onToggleTodo(): void;
  todos: []
}

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo }:TodoListProps) => {



  return (
    <>
      <ul className="list-group">
        {
          todos.map(todo => (
            <TodoItem
              key={ todo["id"] }
              todo={ todo }
              onDeleteTodo={ onDeleteTodo }
              onToggleTodo={ onToggleTodo }
            /> 
          ))
        }
      </ul>
    </>
  )
}
