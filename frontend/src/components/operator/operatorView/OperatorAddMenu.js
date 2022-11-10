import Navbar from "../../navbar"
import { useState } from "react";
import Tab from "../../client/menubar/Tab";
import MealOperator from "../MealOperator";
import { IoMdAdd } from 'react-icons/io';
import { IoRemove } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useContext } from "react";
import { MealsContext } from "../../../Context/Context";


const AddMenu = () => { 

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const [activeDay, setActiveDay] = useState('');

    const context = useContext(MealsContext)

    const setDayHandler = (day) => {
        setActiveDay(day);
      }

      const meals = {
        name: 'essa',
        ingredients: 'esaas',
        type:'',
        preferences:''
      }
    return(
        <div className="w-8/10 self-center justify-around p-10 shadow-lg mt-20 rounded-xl">
                <div className={'flex  h-20'}>
                    {days.map((day, index) => {
                    return (
                    <Tab key={index} day={day}  active={activeDay} onDayChange={setDayHandler} />
                        )
                     })}
                 </div>
                 <button onClick={() =>{ 
                        context.showHandler()
                        }} className=' ml-5 mt-4 text-md my-2 w-24 rounded-lg h-12 duration-150  bg-green-400 text-white flex justify-center items-center font-bold hover:bg-green-600 '>
                        
                            Add Meal
                 </button>
                 <div className="">
                     <MealOperator meals={meals} />
                 </div>
                 <button  className={'flex p-4 m-auto mt-5 duration-200 font-bold justify-center shadow-sm self-center items-center w-1/6 rounded-2xl text-white bg-green-400 hover:bg-green-500 focus:bg-green-700'}>Confirm</button>
            </div>
    )
 }
 export default AddMenu