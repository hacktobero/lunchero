import { useState } from "react";
import Tab from "../../shared-components/Tab";
import MealOperator from "../shared-operator/MealOperator";
import { useContext } from "react";
import { MealsContext } from "../../../Context/Context";


const OperatorAddMenu = () => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const [activeDay, setActiveDay] = useState('');
    const [open ,setOpen] = useState(false)

    const context = useContext(MealsContext)

    const setDayHandler = (day) => {
        setActiveDay(day);
      }

    return(
      <div className='flex flex-col p-5 md:w-3/4 md:h-5/6 sm:h-full sm:w-5/6 justify-start self-center shadow-xl'>
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

        <button onClick={() =>{context.showHandler()}}
                className='flex text-md w-24 h-12 mb-2 md:mt-2 sm:mt-0 rounded-lg duration-150 bg-green-400 text-white justify-center items-center font-bold hover:bg-green-600 '>
          Add Meal
        </button>

        <div className='flex flex-col w-full h-full border-y-2 self-center overflow-y-scroll'>
          <MealOperator />
        </div>

        <button  className='flex p-4 mt-5 duration-200 font-bold justify-center shadow-sm self-center items-center md:w-1/6 sm:w-28 rounded-2xl text-white bg-green-400 hover:bg-green-500 focus:bg-green-700'>Confirm</button>
      </div>
    )
 }
 export default OperatorAddMenu
