import { authSlice, clearErrorMessage, onLogin, onLogout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState } from "../../__fixtures/authStates";
import { testUserCeredentials } from "../../__fixtures/testUser";

describe('Pruebas en authSlice', () => {

  test('debe regresar el estado inicial', () => {

    expect( authSlice.getInitialState() ).toEqual( initialState );

  });

  test('debe realizar un login', () => {

    const state = authSlice.reducer( initialState, onLogin( testUserCeredentials))
    // console.log(state);
    expect( state ).toEqual({
      status: "authenticated",
      user: testUserCeredentials,
      errorMessage: undefined
    })
  });

  test('debe de realizar el logout', () => {

    const state = authSlice.reducer( authenticatedState, onLogout() );
    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: undefined
    })
  });

  test('debe de realizar el logout con errorMessage', () => {

    const errorMessage = "Credenciales no válidas";
    const state = authSlice.reducer( authenticatedState, onLogout(errorMessage) );
    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: errorMessage
    })
  });

  test("debe de limpiar el mensaje de error", () => {
    const errorMessage = "Credenciales no válidas";
    const state = authSlice.reducer( authenticatedState, onLogout(errorMessage) );
    const newState = authSlice.reducer( state, clearErrorMessage() );

    expect( newState.errorMessage ).toBe( undefined );
  })

})