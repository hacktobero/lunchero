import Meal from "./meals-section/Meal";
import Tab from "../shared-components/Tab";
import {useContext, useState} from 'react';
import {MealsContext} from "../../Context/Context";


export default function MenuBar() {


  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const { cartItems } = useContext(MealsContext)

  const [activeDay, setActiveDay] = useState('');
  const [open ,setOpen] = useState(false)

  const setDayHandler = (day) => {
     setActiveDay(day);
  }


  return (

    <div className='flex flex-col p-5 lg:w-3/4 lg:h-2/3 sm:h-full sm:w-5/6 justify-center self-center shadow-xl'>
      <div className='md:flex sm:hidden w-full h-20 self-center justify-around'>
        {days.map((day, index) => {
          return (
            <Tab key={index} day={day} role='day' active={activeDay} onDayChange={setDayHandler} />
          )
        })}
      </div>
      {/* Mobile version */}
      <div
        onClick={() => {setOpen(!open)}}
        className="md:hidden sm:flex w-full my-2 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xl font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        Day Selection
      </div>

      {open ?  <div className='md:hidden sm:flex flex-col w-full mb-2 h-128 self-center justify-around'>
        {days.map((day, index) => {
          return (
            <Tab key={index} day={day} role='day' active={activeDay} onDayChange={setDayHandler} />
          )
        })}
      </div> : null }
      {/* End of mobile version */}

      <div className='flex flex-col w-full h-full border-y-2 self-center overflow-y-scroll'>
        <Meal />
      </div>
      <button onClick={() => console.log(cartItems)} className='flex p-4 mt-5 duration-200 font-bold justify-center shadow-sm self-center items-center md:w-1/6 sm:w-28 rounded-2xl text-white bg-green-400 hover:bg-green-500 focus:bg-green-700'>Confirm</button>
    </div>
  )
}
