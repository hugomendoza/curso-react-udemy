import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";


import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
  
  // test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
  //   const saludo = 'Hola, soy Goku';
  //   const {getByText} = render( <PrimeraApp />);
  //   expect( getByText(saludo) ).toBeInTheDocument();
  // });

  test('debe de mostar <PrimeraApp /> correctamente', () => {

    const saludo = "Hola, soy Goku";
    const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

    expect( wrapper ).toMatchSnapshot();
  
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    
    const saludo = 'Hola, soy Goku';
    const subTitulo = 'Soy un subtítulo';

    const wrapper = shallow( 
      <PrimeraApp 
        saludo={ saludo } 
        subTitulo={ subTitulo }
      /> );

      const textoParrafo = wrapper.find('p').text();
      console.log(textoParrafo);

      expect( textoParrafo ).toBe( subTitulo );

  });
  
});
