import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

  test('debe regresar los valores por defecto', () => {

    const initialForm = {
      name: "Fernando",
      email: "fernando@google.com"
    }
    
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result)
    
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  
  })

  test('debe de cambiuar el nombre del formulario', () => {

    const newValue = "Juan";

    const { result } = renderHook(() => useForm());
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: {name: 'name', value: newValue} })
    })

    expect( result.current.name ).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

  })

})