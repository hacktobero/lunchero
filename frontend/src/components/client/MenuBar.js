import Meal from "./meals-section/Meal";
import Tab from "../shared-components/Tab";
import {useContext, useState} from 'react';
import {MealsContext} from "../../Context/Context";


export default function MenuBar() {


  const days = ['Monday',
    'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ];
  const { cartItems } = useContext(MealsContext)

  const [activeDay, setActiveDay] = useState('');

  const context = useContext(MealsContext)

  const setDayHandler = (day) => {
     setActiveDay(day);
  }


  return (

    <div className='flex flex-col p-5 lg:w-3/4 lg:h-2/3 sm:h-full sm:w-5/6 justify-center self-center shadow-xl'>
      <div className='flex md:flex-row sm:flex-col w-full md:h-20 sm:h-128 self-center justify-around'>
        {days.map((day, index) => {
          return (
            <Tab key={index} day={day} role='day' active={activeDay} onDayChange={setDayHandler} />
          )
        })}
      </div>
      <div className='flex flex-col w-full h-full self-center overflow-y-scroll rounded-md'>
        <Meal />
      </div>
      <button onClick={() => console.log(cartItems)} className='flex p-4 mt-5 duration-200 font-bold justify-center shadow-sm self-center items-center md:w-1/6 sm:w-28 rounded-2xl text-white bg-green-400 hover:bg-green-500 focus:bg-green-700'>Confirm</button>
    </div>
  )
}
