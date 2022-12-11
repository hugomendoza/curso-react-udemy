import { useState } from "react";
import { useGetTodoQuery } from "./store/apis"

interface propsTodo {
  id: number;
  title: string;
  completed: boolean
}

export const TodoApp = () => {

  // const { data: todos = [], isLoading } = useGetTodosQuery()
  
  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const nextTodo = () => {
    setTodoId( todoId + 1 )
  }

  const prevTodo = () => {
    if( todoId === 1 ) return;
    setTodoId( todoId - 1 )
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading {isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={ prevTodo }>
        Prev todo
      </button>
      <button onClick={ nextTodo }>
        Next todo
      </button>

      {/* <ul>
        {
          todos.map( (todo:propsTodo) => (
            <li key={todo.id}>
              <strong>
                { todo.completed ? "DONE" : "Pending"}
              </strong>
              { todo.title }
            </li>
          ))
        }
      </ul> */}

    </>
  )
}
