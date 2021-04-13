import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
  
  test('debe de realizar el login ', () => {
    
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Hugo'
      }
    };

    const state = authReducer( initState, action );

    // console.log(state);

    expect( state ).toEqual({
      uid: 'abc',
      name: 'Hugo'
    });

  });

  test('debe de realizar el logout ', () => {
    
    const initState = {
      uid: 'sjfljslfdjlsfjl',
      name: 'Hugo'
    };

    const action = {
      type: types.logout
    };

    const state = authReducer( initState, action );

    // console.log(state);

    expect( state ).toEqual({});

  });

  test('no debe de hacer cambios en el state', () => {
    
    const initState = {
      uid: 'sjfljslfdjlsfjl',
      name: 'Hugo'
    };

    const action = {
      type: 'hfsdhkfhkshfks'
    };

    const state = authReducer( initState, action );

    // console.log(state);

    expect( state ).toEqual(initState);

  });
  

});
