import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  status: "checking" | "not-authenticated" | "authenticated";
  uid?: number | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: "not-authenticated", // "not-authenticated - authenticated"
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, { payload } ) => {
      state.status = "authenticated"; // "not-authenticated - authenticated"
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: ( state, { payload } ) => {
      state.status = "not-authenticated"; // "not-authenticated - authenticated"
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: ( state ) => {
      state.status = "checking";
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;