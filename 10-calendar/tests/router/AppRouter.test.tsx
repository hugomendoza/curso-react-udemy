import { MemoryRouter } from "react-router-dom";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { Calendarpage } from "../../src/calendar/pages/CalendarPage";

jest.mock("../../src/hooks/useAuthStore");

jest.mock("../../src/calendar/pages/CalendarPage",() => {
  Calendarpage: () => <h1>Calendar Page</h1>
});

describe('Pruebas en <AppRouter />', () => {

  const mockCheckAuthToken = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("debe mostrar la pantalla de carga y llamar checkAuthToken", () => {
    useAuthStore.mockReturnValue({
      status: "checking",
      checkAuthToken: mockCheckAuthToken
    });

    render(<AppRouter />)
    // screen.debug();

    expect( screen.getByText("Cargando...") ).toBeTruthy();
    expect( mockCheckAuthToken ).toHaveBeenCalled();

  });

  test("debe mostrar el login en caso de no estar autenticado", () => {
    useAuthStore.mockReturnValue({
      status: "not-authenticated",
      checkAuthToken: mockCheckAuthToken
    });

    const {container } render(
      <MemoryRouter initialEntries={["/auth/2/otras/cosas"]}>
        <AppRouter />
      </MemoryRouter>
    );
    // screen.debug();

    expect( screen.getByText("Ingreso") ).toBeTruthy();
    expect( container ).toMatchSnapshot();

  });

  test("debe mostrar el calendario sí estamos autenticados", () => {
    useAuthStore.mockReturnValue({
      status: "authenticated",
      checkAuthToken: mockCheckAuthToken
    });

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
    // screen.debug();
    expect( screen.getByText("Calendar Page") ).toBeTruthy();
  });
});