import { useState } from 'react'
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type CustomCalendarProps = ComponentProps<typeof Calendar> & {
  className?: string
  onClick?: (value: any) => void;
}


const CustomCalendar: FC<CustomCalendarProps> = ({ className, onClick, ...props }) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar
        className={twMerge(
          'bg-white border border-gray-200 rounded-md drop-shadow-sm',
          className
        )}
        onChange={onChange}
        value={value}
        onClickDay={onClick}
        {...props}
      />
    </div>
  )
}

export default CustomCalendar;