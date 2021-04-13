import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Pruebas en componente <HookApp />', () => {

  test('debe de mostrarse correctamente el componente', () => {
    
    const wrapper = shallow( <HookApp /> );

    expect( wrapper).toMatchSnapshot();
  });
  

});