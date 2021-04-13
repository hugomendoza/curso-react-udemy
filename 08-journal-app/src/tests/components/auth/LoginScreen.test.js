import React from 'react';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';


jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
};

let store = mockStore (initState);
store.dispatch = jest.fn();

describe('Pruebas en <LoginScreen />', () => {

  beforeEach(() => {
    
    store = mockStore (initState);
    jest.clearAllMocks();

  })
  
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen/>
      </MemoryRouter>
    </Provider>
  );

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper ).toMatchSnapshot();
  });

  test('debe de dispara la acción de startGoogleLogin', () => {
    
    wrapper.find('.google-btn').prop('onClick')();
    

    expect( startGoogleLogin ).toHaveBeenCalled();

  });

  test('debe dispararse el startLogin con los respectivos argumentos', () => {

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect( startLoginEmailPassword ).toHaveBeenCalledWith('nando@gmail.com', '123456');
  });
  
  
  

});
