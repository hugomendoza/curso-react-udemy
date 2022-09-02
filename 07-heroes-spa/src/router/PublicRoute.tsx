import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext, PropsAuthContext } from "../auth";


export const PublicRoute = ({children}:any) => {
  const { logged } = useContext( AuthContext ) as PropsAuthContext;

  return (!logged) ? children : <Navigate to="/marvel" />
}