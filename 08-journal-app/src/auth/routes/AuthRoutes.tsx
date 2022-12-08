import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={ <LoginPage />} />
      <Route path="register" element={ <RegisterPage />} />

      {/* Path para redirigir hacia el login si la ruta no se encuentra */}

      <Route path="/*" element={ <Navigate to="/auth/login" />} />
    </Routes>
  )
}
