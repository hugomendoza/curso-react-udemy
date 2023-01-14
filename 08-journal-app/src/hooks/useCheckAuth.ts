import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
  const { status } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if( !user ) return dispatch( logout);
      const { uid, email, displayName, photoURL } = user;
      dispatch( login({ uid, email, displayName, photoURL }));
      dispatch( startLoadingNotes ());
    })

  }, [])

  return {
    status
  }
}
