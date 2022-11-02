import Navbar from "../../navbar"
import { useState } from "react";
import Tab from "../../client/menubar/Tab";
import Meal from "../Meal";
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
              <button onClick={() =>{ 
                        context.showHandler()
                        }} className='border rounded-full m-auto my-2 w-12 h-12 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600 '>
                        
                            <IconContext.Provider value={{ size: '2em' }}>
                                <IoMdAdd />
                            </IconContext.Provider>
              </button>
                <div className={'flex  h-20'}>
                    {days.map((day, index) => {
                    return (
                    <Tab key={index} day={day}  active={activeDay} onDayChange={setDayHandler} />
                        )
                     })}
                 </div>
                 <div className="">
                     <Meal meals={meals}></Meal>
                 </div>
                 <button  className={'flex p-4 m-auto mt-5 duration-200 font-bold justify-center shadow-sm self-center items-center w-1/6 rounded-2xl text-white bg-green-400 hover:bg-green-500 focus:bg-green-700'}>Confirm</button>
            </div>
    )
 }
 export default AddMenu