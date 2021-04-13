import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en componente <GifGridItem />', () => {
  
  const title = "Dragon Ball z";
  const url = "https://imagen.jpg";
  
  const wrapper = shallow(
    <GifGridItem
      title={ title }
      url={ url }
    /> 
  );
  
  test('debe de mostrar el componente <GifGridItem />', () => {
    
    expect( wrapper ).toMatchSnapshot();

  });

  test('debe de tener un párrafo con el title', () => {

    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );

  });

  test('debe de tener la imagen igual al url y alt de los props ', () => {
    
    const img = wrapper.find('img');
    // console.log( img.props() );

    expect( img.prop( 'src' ) ).toBe( url );
    expect( img.prop( 'alt' ) ).toBe( title );

  });

  test('debe de tener animate__fadeIn', () => {

    const div = wrapper.find('div');
    console.log(div.props());
    const className = div.prop('className');

    expect( className .includes('animate__fadeIn')).toBe( true );
    
  });
  
});
