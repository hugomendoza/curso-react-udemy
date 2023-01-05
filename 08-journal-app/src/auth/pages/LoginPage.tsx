import { useMemo } from "react";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {

  const dispatch = useAppDispatch();
  const { status } = useAppSelector(state => state.auth)
  console.log(status)

  const { email, password, onInputChange } = useForm ({
    email: "fernando@google.com",
    password: "123456"
  })

  const isAuthenticating = useMemo(() => status === "checking", [status])

  const onSubmit = ( event: { preventDefault: () => void; } ) => {
    event.preventDefault();
    console.log({email, password})
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  }

  return (

    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={ 12 } sx={{ mt: 2}}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2}}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ my: 2 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                disabled= { isAuthenticating }
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                disabled= { isAuthenticating }
                variant="contained"
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link
              component={ RouterLink }
              color="inherit"
              to="/auth/register"
            >
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
