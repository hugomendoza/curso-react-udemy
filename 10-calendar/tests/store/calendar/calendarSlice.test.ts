import { calendarSlice, onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar } from "../../../src/store/calendar/calendarSlice";
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../__fixtures/calendarStates";

describe("Pruebas en calendarSlice", () => {

  test("debe de regresar el estado por defecto", () => {
    const state = calendarSlice.getInitialState();
    expect( state ).toEqual( initialState );
  });

  test("onSetActiveEvent debe activar el evento", () => {
    const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0] ) );
    // console.log(state);
    expect( state.activeEvent ).toEqual( events[0] );
  })

  test("onAddNewEvent debe agregar el evento", () => {
    const newEvent = {
      id: "3",
      title: "Cuampleaños de Jose Heli",
      notes: "Le gustan los afros",
      start: new Date("2023-10-21 13:00:00"),
      end: new Date("2023-10-21 15:00:00"),
    };

    const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ));
    // console.log(state);
    expect( state.events ).toEqual([...events, newEvent ]);
  });

  test("onUpdateEvent debe actualizar el evento", () => {
    const updatedEvent = {
      id: "1",
      title: "Cuampleaños de Jose Heli 2.0",
      notes: "Le gustan los afros 2.0",
      start: new Date("2023-10-21 13:00:00"),
      end: new Date("2023-10-21 15:00:00"),
    };

    const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updatedEvent ));
    // console.log(state);
    expect( state.events ).toContain( updatedEvent );
  });
  
  test('onDeleteEvent debe borrar el evento activo', () => {
    const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent());
    expect( state.activeEvent ).toBe(null);
    expect( state.events ).not.toContain(events[0]);
  });

  test('onLoadEvents debe establecer los eventos', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents( events ));
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);

    const newState = calendarSlice.reducer( state, onLoadEvents( events ) );
    expect( newState.events.length ).toBe(events.length);
  });

  test('onLogoutCalendar debe limpiar el estado', () => {
    const state = calendarSlice.reducer( calendarWithActiveEventState, onLogoutCalendar() );
    expect( state ).toEqual( initialState ); 
  });

})