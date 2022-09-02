import { types } from "../types/types";

export const authReducer = ( state = {}, action: { type: string; payload?:{}; } ) => {

  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      break;
  }

}