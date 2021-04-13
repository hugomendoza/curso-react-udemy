import React from 'react';
// import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

// import { firebase } from '../../../firebase/firebase-config';

import { mount } from "enzyme";
import { Provider } from 'react-redux';
// import { LoginScreen } from '../../../components/auth/LoginScreen';
// import { logout, startGoogleLogin, startLoginEmailPassword, startLogout, login } from '../../../actions/auth';
// import { AppRouter } from '../../routers/AppRouter';
// import { act } from 'react-dom/test-utils';
// import Swal from 'sweetalert2';
import { activeNote } from '../../../actions/notes';
// import { Sidebar } from '../../../components/journal/Sidebar';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn(),
}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: '1',
    name: 'Fernando'
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: {
      id: 1234,
      title: 'Hola',
      body: 'body',
      date: 0
    },
    notes: []
  }
};

let store = mockStore (initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe('Pruebas en <NotesScreen />', () => {

  test('debe de mostrarse correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();

  });

  test('debe de dispara el active note', () => {
    
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'title'
      }
    });

    expect( activeNote ).toHaveBeenLastCalledWith(
      1234,
      {
        body: 'body',
        title: 'title',
        id: 1234,
        date: 0
      }
    );

  });
  
  

});