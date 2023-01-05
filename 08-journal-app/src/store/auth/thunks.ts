import { registerUserWithEmailPasword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = ( email?:string, password?:string ) => {
  return async( dispatch: (arg0: { payload: undefined; type: "auth/checkingCredentials"; }) => void ) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {

  //Review other options to replace the type any in dispatch
  return async( dispatch:any ) => {
    
    dispatch( checkingCredentials () );
    const result = await signInWithGoogle();

    if ( !result.ok ) return dispatch( logout( result.errorMessage ) )

    dispatch( login(result) )
  }

}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() );
    
    const {ok, uid, photoURL, errorMessage } = await registerUserWithEmailPasword({ email, password, displayName});

    if( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ uid, displayName, email, photoURL }));
  }
}