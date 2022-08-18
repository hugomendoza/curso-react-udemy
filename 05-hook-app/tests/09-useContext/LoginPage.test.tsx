import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en <LoginPage />', () => {
  
  test('debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}> 
        <LoginPage />
      </UserContext.Provider>
    )
    
    const preTag = screen.getByLabelText("pre")
    expect( preTag.innerHTML ).toBe("null");
  })

  test('debe llamar el setUser cuando se hace click en el boton', () => {

    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{ user: null, setUSer: setUserMock }}> 
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByRole("button")
    fireEvent.click( button )
    
    expect( setUserMock ).toHaveBeenCalledWith(
      {
        "email": "juan@google.com",
        "id": 123,
        "name": "Juan"
      }
    )
  })

})