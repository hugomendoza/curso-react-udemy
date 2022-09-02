import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext, PropsAuthContext } from "../auth";


export const PrivateRoute = ({children}:any) => {
  const { logged } = useContext( AuthContext ) as PropsAuthContext;
  const {pathname, search} = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastpath", lastPath)

  return (logged) ? children : <Navigate to="/login" />
}