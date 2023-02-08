import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import { useAppDispatch, useAppSelector } from "./useDispatch";

export const useCalendarStore = () => {
  
  const dispatch = useAppDispatch();
  const { events, activeEvent } = useAppSelector( state => state.calendar );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async( calendarEvent ) => {

    if( calendarEvent._id ) {
      //* Actualizando
      dispatch( onUpdateEvent( {...calendarEvent} ) )
    }else {
      // *Creando
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }

  }

  const startDeletingEvent = () => {
    dispatch( onDeleteEvent() )
  }
  
  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
