import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en componente <CounterApp />', () => {
  
  let wrapper = shallow( <CounterApp /> );

  beforeEach( () => {
    wrapper = shallow( <CounterApp /> );
  })

  test('debe de mostrat <CounterApp /> correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar el valor por defecto de 100', () => {

    const counter = '100';

    const wrapper = shallow(
      <CounterApp
        value={ 100 }
      /> );

    const numeroCounter = wrapper.find('h2').text();
    console.log( numeroCounter );

    expect( numeroCounter ).toBe( counter );

  });

  test('debe de incrementar con el botón +1', () => {

    wrapper.find('button').at(0).simulate('click');

    const numeroCounter = wrapper.find('h2').text();

    expect( numeroCounter ).toBe('11');

  });
  
  test('debe de disminuir con el botón -1', () => {

    wrapper.find('button').at(2).simulate('click');

    const numeroCounter = wrapper.find('h2').text();

    expect( numeroCounter ).toBe('9');

  });

  test('debe de colocar el valor por defect con el btn reset', () => {
    
    const wrapper = shallow(
      <CounterApp
        value={ 105 }
      /> );

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const numeroCounter = wrapper.find('h2').text();

    console.log( numeroCounter );

    expect( numeroCounter ).toBe('105');
  });
  

});
