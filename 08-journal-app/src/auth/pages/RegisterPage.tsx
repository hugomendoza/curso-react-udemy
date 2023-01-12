import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";


const formData = {
  email: "",
  password: "",
  displayName: ""
}

const formValidations = {
  email: [ (value:string) => value.includes("@"), "El correo debe de tener una @" ],
  password: [ (value:string) => value.length >= 1 , "El password debe tener más de 6 letras" ],
  displayName: [ (value:string) => value.length >= 1, "El nombre es obligatorio" ],
}

export const RegisterPage = () => {

  const dispatch = useAppDispatch();
    const [formSubmitted, setFormSubmited] = useState( false );

  const { status, errorMessage } = useAppSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === "checking", [ status ]);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations)
  
  const onSubmit = ( event: { preventDefault: () => void; } ) => {
    event.preventDefault();
    setFormSubmited(true);

    if ( !isFormValid ) return;
    dispatch( startCreatingUserWithEmailPassword(formState))
  }

  return (

    <AuthLayout title="Crear cuenta">
      <form
        onSubmit={ onSubmit }
        className="animate__animated animated__fadeIn"
      >
        <Grid container>

          <Grid item xs={ 12 } sx={{ mt: 2}}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error= { !!displayNameValid && formSubmitted }
              helperText= { displayNameValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2}}>
            <TextField
              label="Correo"
              type="email"
              placeholder="corre@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error= { !!emailValid && formSubmitted }
              helperText= { emailValid }
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
              error= { !!passwordValid && formSubmitted }
              helperText= { passwordValid }
            />
          </Grid>


          <Grid container spacing={ 2 } sx={{ my: 2 }}>
            <Grid
              item
              xs={ 12 }
              display={ !!errorMessage ? "" : "none"}
            >
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button
                disabled={ isCheckingAuthentication }
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link
              component={ RouterLink }
              color="inherit"
              to="/auth/login"
            >
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
