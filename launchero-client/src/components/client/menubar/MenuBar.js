import Meal from "../meals-section/Meal";
import Tab from "./Tab";
import { useState } from 'react';
export default function MenuBar() {

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


  const [activeDay, setActiveDay] = useState('');

  const setDayHandler = (day) => {
    setActiveDay(day);
  }
  return (

    <div className={'flex flex-col p-5 w-3/4 h-2/3 justify-center self-center shadow-xl'}>
      <div className={'flex w-full h-20 self-center justify-around'}>
        {days.map((day, index) => {
          return (
            <Tab key={index} day={day}  active={activeDay} onDayChange={setDayHandler} />
          )
        })}
      </div>
      <div className={'flex flex-col w-full h-full self-center overflow-y-scroll rounded-md'}>
        <Meal />
        <Meal />
      </div>
    </div>
  )
}
