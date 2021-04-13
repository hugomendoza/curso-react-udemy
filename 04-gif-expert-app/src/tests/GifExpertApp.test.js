import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {

  test('debe de mostrarse correctamente', () => {
    
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();

  });

  test('debe de mostrar una lista de categorías', () => {
    
    const categories = ['One Punch', 'Samurai X'];

    const wrapper = shallow(<GifExpertApp  defaultCategories={ categories }/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe( categories.length );

  })
  
  
});