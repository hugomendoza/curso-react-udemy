import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {

  const category = 'One Punch';

  test('debe de mostrarse correctamente', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      load: true
    });

    const wrapper = shallow( <GifGrid category={ category } />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se caragn imágenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        url: 'http://localhost/cualquier/.cosa.jpg',
        title: 'Cualquier cosa'
      },
      {
        id: 'DEF',
        url: 'http://localhost/cualquier/.cosa-2.jpg',
        title: 'Cualquier cosa 2'
      }
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      load: false
    });
    
    const wrapper = shallow( <GifGrid category={ category }/>);

    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);

  })
  

});