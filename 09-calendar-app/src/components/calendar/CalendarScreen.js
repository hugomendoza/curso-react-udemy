import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector ( state => state.calendar);
  
  const { uid } = useSelector ( state => state.auth);

  const [lastview, setLastView] = useState( localStorage.getItem('lastview') || 'month' );

  useEffect(() => {
    dispatch( eventStartLoading() );
  }, [dispatch])

  const onDoubleClick = (e) => {
    // console.log(e);
    dispatch( uiOpenModal() );
  };
  
  const onSelectEvent = (e) => {
    // console.log(e);
    dispatch( eventSetActive( e ) );
    // dispatch( uiOpenModal() );
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastview', e);
  };

  const onSelectSlot = (e) => {
    // console.log(e);
    dispatch( eventClearActiveEvent() );
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    // console.log(event, start, end, isSelected);
    
    const style = {
      backgroundColor: (uid === event.user._id ) ? '#367CF7' : '#455660',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    };

    return {
      style
    }
  }

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={ events }
        startAccessor="start"
        endAccessor="end"
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelectEvent }
        onView={ onViewChange }
        onSelectSlot={ onSelectSlot }
        selectable={ true }
        view={ lastview }
        components={{
          event: CalendarEvent
        }}
      />

      <CalendarModal />

      {
        (activeEvent) && ( <DeleteEventFab /> )
      }

      <AddNewFab />
    </div>
  )
}
