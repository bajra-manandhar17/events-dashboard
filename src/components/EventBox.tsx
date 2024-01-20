import type { ComponentProps, FC } from "react"
import { twMerge } from "tailwind-merge"

interface EventBoxRequiredProps {
  eventStartDate: string,
  eventEndDate: string,
  eventName: string,
  eventLocation: string,
  eventDescription: string
}

type EventBoxProps = ComponentProps<'div'> & {
  className?: string
  onClick?: () => void
} & EventBoxRequiredProps;

const formatEventDates = (eventStartDate: string, eventEndDate: string) => {
  const startDate = new Date(eventStartDate);
  const endDate = new Date(eventEndDate);

  const eventStartDay = startDate.getDate()
  const eventStartMonth = startDate.toLocaleString('default', { month: 'short' })
  const eventEndDay = endDate.getDate()
  const eventEndMonth = endDate.toLocaleString('default', { month: 'short' })
  const eventStartYear = startDate.getFullYear()
  const eventEndYear = endDate.getFullYear()

  if (eventStartYear === eventEndYear) {
    if (eventStartMonth === eventEndMonth) {
      if (eventStartDay === eventEndDay) {
        return `${eventStartDay} ${eventStartMonth}`
      } else {
        return `${eventStartDay} - ${eventEndDay} ${eventStartMonth}`
      }
    } else {
      return `${eventStartDay} ${eventStartMonth} - ${eventEndDay} ${eventEndMonth}`
    }
  } else {
    return `${eventStartDay} ${eventStartMonth} ${eventStartYear} - ${eventEndDay} ${eventEndMonth} ${eventEndYear}`
  }
}

const formatEventDescription = (eventDescription: string) => {
  return eventDescription.length > 70 ? `${eventDescription.slice(0, 70)}...` : eventDescription
}


const EventBox: FC<EventBoxProps> = ({ className, onClick, eventStartDate, eventEndDate, eventName, eventLocation, eventDescription, ...props }) => {
  return (
    <div
      className={twMerge('bg-white border border-gray-200 rounded-md drop-shadow-sm', className)}
      onClick={onClick}
      {...props}
    >
      <div className="flex p-2 gap-3">
        <div className="bg-red-500 flex items-center p-4 max-w-20 rounded-lg">
          <p className="text-white text-center font-bold text-xs">
            {formatEventDates(eventStartDate, eventEndDate)}
          </p>
        </div>
        <div className="w-5/6 h-1/6">
          <p className="text-black text-md font-bold">{eventName}</p>
          <p className="text-gray-500 text-sm">{eventLocation}</p>
          <p className="text-gray-500 text-xs">
            {formatEventDescription(eventDescription)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventBox