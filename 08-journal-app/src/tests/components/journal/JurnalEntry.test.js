import React from 'react';
// import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

// import { firebase } from '../../../firebase/firebase-config';

import { mount } from "enzyme";
import { Provider } from 'react-redux';
// import { LoginScreen } from '../../../components/auth/LoginScreen';
// import { logout, startGoogleLogin, startLoginEmailPassword, startLogout } from '../../../actions/auth';
// import { login } from '../../actions/auth';
// import { AppRouter } from '../../routers/AppRouter';
// import { act } from 'react-dom/test-utils';
// import Swal from 'sweetalert2';
import { activeNote } from '../../../actions/notes';
// import { Sidebar } from '../../../components/journal/Sidebar';
import { JournalEntry } from '../../../components/journal/JournalEntry';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore (initState);
store.dispatch = jest.fn();

const nota = {
  id: 10,
  date: 0,
  title: 'Hola',
  body: 'Mundo',
  url: 'https://algunlugar.com/foto.jpg'
};

const wrapper = mount(
  <Provider store={store}>
    <JournalEntry {...nota}/>
  </Provider>
);


describe('Pruebas en <JournalEntry', () => {
  
  test('debe de mostrarse correctamente', () => {
    
    expect(wrapper ).toMatchSnapshot();

  });

  test('debe de activar la nota', () => {
    
    wrapper.find('.journal__entry').prop('onClick')();

    expect( store.dispatch ).toHaveBeenCalledWith(
      activeNote(nota.id, {...nota})
    );
  })
  

  
});
