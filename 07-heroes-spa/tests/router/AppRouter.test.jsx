import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en <AppRouter />', () => {

  test("debe de mostrar el login sí no esta autenticado", () => {

    const contextValue = {
      logged: false,
    }

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={ contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    // screen.debug();
    expect( screen.getAllByText("Login").length ).toBe(2)

  });

  test('Debe de mostrar el componente de Marvel si esta autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Juan Carlos"
      }
    }

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={ contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    
    // screen.debug();
    expect( screen.getAllByText("Marvel Comics") ).toBeTruthy()
    expect( screen.getAllByText("Marvel").length ).toBeGreaterThanOrEqual(1)
  })

})