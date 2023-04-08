import { FC } from "react"
import { Event } from "./../types/types"

interface EventProps {
  event: Event
}

export const CalendarEvent: FC<EventProps> = ( { event } ) => {

  const { title, user } = event

  return (
    <>
      <span>{ title }</span>
      <span> - { user.name } </span>
    </>
  )
}
