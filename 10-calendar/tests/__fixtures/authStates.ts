export const initialState = {
  status: "checking",
  user: {},
  errorMesage: undefined,
}

export const authenticatedState = {
  status: "authenticated",
  user: {
    uid: "abc",
    name: "hugo"
  },
  errorMesage: undefined,
}

export const notAuthenticatedState = {
  status: "not-authenticated",
  user: {},
  errorMesage: undefined,
}
