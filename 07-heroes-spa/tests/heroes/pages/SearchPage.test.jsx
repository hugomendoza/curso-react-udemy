import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes"

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <SearchPage />', () => {

  beforeEach(() => jest.clearAllMocks());

  test('Debe mostrarse correctamente con los valores por defecto', () => {

    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();

    expect( container ).toMatchSnapshot();
    
  })

  test('Debe mostrar a Batman y el input con el valor del queryString', () => {

    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();

    const input = screen.getByRole("textbox");
    expect( input.value ).toBe("batman");

    const img = screen.getByRole("img");
    expect( img.src ).toContain("/assets/heroes/dc-batman.jpg");

    const alert = screen.getByLabelText("alert-danger");
    // console.log(alert)
    expect( alert.style.display ).toBe("none")
    
  })

  test('debe de mostrar un error si no se encuentra el heroe (batman123)', () => {
    
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    
    const alert = screen.getByLabelText("alert-danger");
    expect( alert.style.display ).toBe("")

    
  })

  test('debe de llamar el navigate a la pantalla nueva', () => {

    const inputValue = "superman";

    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );
    
    const input = screen.getByRole("textbox");
    //name corresponde al name del input en SearchPage
    fireEvent.change(input, { target: {name: "searchText", value: inputValue } })
    // console.log(input.value)

    const form = screen.getByRole("form");
    fireEvent.submit(form)

    expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`);

  })
})