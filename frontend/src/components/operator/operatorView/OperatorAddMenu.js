import Navbar from "../../navbar"
import { useState } from "react";
import Tab from "../../client/menubar/Tab";
import Meal from "../Meal";

const AddMenu = () => { 

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const [activeDay, setActiveDay] = useState('');

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
                 <div className="">
                     <Meal meals={meals}></Meal>
                 </div>
            </div>
    )
 }
 export default AddMenu