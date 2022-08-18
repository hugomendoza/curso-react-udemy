import React from "react"
import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/hooks/useTodos"

jest.mock("../../src/hooks/useTodos")

describe('Pruebas en <TodoApp />', () => {

  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Gema del poder",
        done: false
      },
      {
        id: 2,
        description: "Gema del alma",
        done: true
      }
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleTogggleTodo: jest.fn(),
    handleNewTodo: jest.fn()
  })

  test('debe mostrar el componente correctamente', () => {

    render( <TodoApp />)
    // screen.debug()
    expect(screen.getByText("Gema del poder")).toBeTruthy();
    expect(screen.getByText("Gema del alma")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  })

})