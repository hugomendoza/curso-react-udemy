import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")


describe('Pruebas en <MultipleCustomHooks />', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })
    
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('debe mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render(<MultipleCustomHooks />);

    expect( screen.getByText("Loading...") )
    expect( screen.getByText("BreakingBad Quotes"))

    const nextButton = screen.getByRole('button', {name: 'Next quote'})

    expect( nextButton.disabled ).toBeTruthy()
    // screen.debug()
  })

  test('debe mostrar un quote', () => {

    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo"}],
      isLoading: false,
      hasError: null
    })

    render(<MultipleCustomHooks />);
    // screen.debug()
    expect(screen.getAllByText("Hola Mundo")).toBeTruthy();
    expect(screen.getAllByText("Fernando")).toBeTruthy();

    const nextButton = screen.getByRole('button', {name: 'Next quote'})
    expect(nextButton.disabled).toBeFalsy()
  })

  test('debe llamar la funcion incrementar', () => {

    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo"}],
      isLoading: false,
      hasError: null
    })


    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', {name: 'Next quote'})
    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled()

  })

})