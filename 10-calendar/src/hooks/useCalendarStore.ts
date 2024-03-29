import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { useAppDispatch, useAppSelector } from "./useDispatch";

export const useCalendarStore = () => {
  
  const dispatch = useAppDispatch();
  const { events, activeEvent } = useAppSelector( state => state.calendar );
  const { user } = useAppSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async( calendarEvent ) => {

    try {
      
      if( calendarEvent.id ) {
        //* Actualizando
        await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent )
        dispatch( onUpdateEvent({ ...calendarEvent, user }) )
        return;
      }
  
      // *Creando
      const { data } = await calendarApi.post("/events", calendarEvent);
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );

    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }

  }

  const startDeletingEvent = async () => {

    try {
      await calendarApi.delete(`/events/${ activeEvent.id }`)
      dispatch( onDeleteEvent() )
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }

  }

  const startLoadingEvents = async() => {
    try {
      
      const { data } = await calendarApi.get("/events");
      const events = convertEventsToDateEvents( data.eventos );
      dispatch( onLoadEvents( events) );

    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error)
    }
  }
  
  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents
  }
}
