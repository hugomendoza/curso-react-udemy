import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  const storageItems = JSON.parse( localStorage.getItem("todos")!) 
  return storageItems || [];
}

export const useTodos = (initialState = []) => {
  
  const [ todos, dispatchTodos ] = useReducer( todoReducer, initialState, init );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  const handleNewTodo = (todo: any) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo
    }

    dispatchTodos(action);
  }

  const handleDeleteTodo = (id:number) => {
    dispatchTodos({
      type: "[TODO] Remove Todo",
      payload: id
    })
  }

  const handleToggleTodo = ( id:number ) => {
    dispatchTodos({
      type: "[TODO] Toggle Todo",
      payload: id
    })
  }

  const todosCount = todos.length
  // const pendingTodosCount = todos.filter( todo => todo.done === false ).length
  const pendingTodosCount = todos.filter( (todo: { done: boolean; }) => !todo.done).length

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount
  }
}
