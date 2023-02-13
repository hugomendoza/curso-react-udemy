import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store";
import { useAppDispatch, useAppSelector } from "./useDispatch"

export const useAuthStore = () => {

  const { status, errorMessage, user } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  const startLogin = async({ email, password}) => {
    dispatch( onChecking() );
    try {

      const { data } = await calendarApi.post("/auth", {email, password});
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch( onLogin({ name: data.name, uid: data.uid }) );

    } catch (error) {
      dispatch( onLogout("Credenciales incorrectas") );
      setTimeout(() => {
        dispatch( clearErrorMessage() );
      }, 10)
    }
  }

  const startRegister = async({name, password, email}) => {
    dispatch( onChecking() );
    try {

      const { data } = await calendarApi.post("/auth/new", {name, password, email})
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch( onLogin({ name: data.name, uid: data.uid }) );

    } catch (error) {
      dispatch( onLogout( error.response.data.msg ) );
      setTimeout(() => {
        dispatch( clearErrorMessage() );
      }, 10)
    }
  }

  const checkAuthToken = async() => {
    const token = localStorage.getItem("token");
    if( !token ) return dispatch( onLogout() );

    try {
      const { data } = await calendarApi.get("auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch( onLogin({ name: data.name, uid: data.uid }) );
    } catch (error) {
      localStorage.clear();
      dispatch( onLogout() );
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch( onLogoutCalendar());
    dispatch(onLogout());
  }

  return {
    //* Props
    status,
    errorMessage,
    user,

    //* Methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }
}