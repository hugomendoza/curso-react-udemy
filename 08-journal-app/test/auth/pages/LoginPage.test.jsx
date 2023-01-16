import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () =>  mockStartLoginWithEmailPassword({ email, password })
  }
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
})


describe('Pruebas <LoginPage />', () => {

  beforeEach(() => jest.clearAllMocks() );

  test('debe mostrar el componente correctamente', () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    // screen.debug();
    expect( screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);

  });

  test('Botón de Goolge debe de llamar el startGoogleSignIn', () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )
    
    console.log(store.getState())
    // screen.debug();
    const googleBtn = screen.getByLabelText("google-btn");
    // console.log(googleBtn);

    fireEvent.click( googleBtn );
    expect( mockStartGoogleSignIn ).toHaveBeenCalled();

  });

  test('submit de llamar startLoginWithEmailPassword', () => {

    const email = "fernando@gmail.com";
    const password = "123456";

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    // const emailField = screen.getByRole("textbox", {name: "Correo2"});
    const emailField = screen.getByRole("textbox", {name: "Correo"});
    // console.log(emailField);
    // screen.debug();
    fireEvent.change(emailField, { target: {name: "email", value: email } });


    const passwordField = screen.getByTestId("password");
    fireEvent.change(passwordField, { target: {name: "password", value: password } })

    const loginForm = screen.getByLabelText("submit-form");
    fireEvent.submit( loginForm );

    expect( mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
      email: email,
      password: password
    })

  })

})