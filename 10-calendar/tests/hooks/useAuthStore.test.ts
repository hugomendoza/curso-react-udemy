import { authSlice } from "../../src/store";
import { configureStore } from "@reduxjs/toolkit"
import { initialState, notAuthenticatedState } from "../__fixtures/authStates"
import { renderHook, act, waitFor } from "@testing-library/react"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { Provider } from "react";
import { testUserCeredentials } from "../__fixtures/testUser"
import { calendarApi } from "../../src/api";

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: {...initialState }
    }
  })
}
describe('Pruebas en AuthStore', () => {

  beforeEach(() => localStorage.clear());

  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore({ ...initialState })
    const {result} = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    })
    // console.log(result.current);
    expect(result.current).toEqual({
      errorMessage: undefined,
      status: "checking",
      user: {},
      checkAuthToken: expect.any(Function),
      startLogin: expect.any(Function),
      startLogout: expect.any(Function),
      startRegister: expect.any(Function),
    });
  });

  test('startLogin debe de realizar el login correctamente', () => {
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const {result} = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    });

    await act(async() => {
      await result.current.startLogin( testUserCeredentials );
    })

    // console.log(result.current);
    const {errorMessage, status, user} = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: "authenticated",
      user: {
        name: "Test user", uid: "io8758345734890578043"
      }
    });

    expect( localStorage.getItem("token") ).toEqual(expect.any(String));
    expect( localStorage.getItem("token-init-date") ).toEqual(expect.any(String));
  });

  test('startLogin debe de fallar la autenticación', () => {

    const mockStore = getMockStore({ ...notAuthenticatedState });
    const {result} = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    });

    await act(async() => {
      await result.current.startLogin({email: "algo@google.com". password: "123456789"});
    });

    const {errorMessage, status, user} = result.current;
    expect(localStorage.getItem("token")).toBe(null);
    expect({errorMessage, status, user}).toEqual({
      errorMessage: "Credenciales incorrectas",
      status: "not-authenticated",
      user: {}
    });

    await waitFor(
      () => expect( result.current.errorMessage ).toBe(undefined);
    );

  });

  test('startRegister debe crear un usuario', async() => {

    const newUser = {email: "algo@google.com". password: "123456789", name: "Test User 2"}
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const {result} = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    });

    const spy = jest.spyOn(calendarApi, "post").mockReturnValue({
      data: {
        ok: true,
        uid: "123457890",
        name: "Test User",
        token: "ALGUN-TOKEN"
      }
    });

    await act(async() => {
      await result.current.startRegister(newUser);
    });

    const {errorMessage, status, user} = result.current;

    expect({errorMessage, status, user}).toEqual({
      errorMessage: undefined,
      status: "authenticated",
      user: { name: "Test User", uid: "1236873132"};
    })

    spy.mockRestore();

  });

  test('startRegister debe de fallar la creación', async() => {
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const {result} = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    });

    await act(async() => {
      await result.current.startRegister(testUserCeredentials);
    });

    const {errorMessage, status, user} = result.current;

    expect({errorMessage, status, user}).toEqual({
      errorMessage: "El usuario ya existe",
      status: "not-authenticated",
      user: {}
    });
  });

  test('checkAuthToken debe de fallar sí no hay token', async() => {
    const mockStore = getMockStore({ ...initialState });
    const {result} = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    });

    // console.log("token", localStorage.getItem("token"));

    await act(async() => {
      await result.current.checkAuthToken();
    });

    const {errorMessage, status, user} = result.current;

    expect({errorMessage, status, user}).toEqual({
      errorMessage: undefined,
      status: "not-authenticated",
      user: {}
    });

  });

  test("checkAuthToken debe autenticar el usuario sí hay token", async() => {

    const { data } = await calendarApi.post("/auth", testUserCeredentials);
    // console.log(data);
    localStorage.setItem("token", data.token);

    const mockStore = getMockStore({ ...initialState });
    const {result} = renderHook(() => useAuthStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    });

    // console.log("token", localStorage.getItem("token"));

    await act(async() => {
      await result.current.checkAuthToken();
    });

    const {errorMessage, status, user} = result.current;

    expect({errorMessage, status, user}).toEqual({
      errorMessage: undefined,
      status: "authenticated",
      user: {name: "Test User", uid: "0i34ueter.,erntlekrhjt"}
    });
  })

})