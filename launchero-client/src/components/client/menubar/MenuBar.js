import Meal from "../meals-section/Meal";
import Tab from "./Tab";
import {useContext, useState} from 'react';
import {MealsContext} from "../../../Context/Context";
export default function MenuBar() {


  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const { cartItems } = useContext(MealsContext)

  const [activeDay, setActiveDay] = useState('');

  const context = useContext(MealsContext)

  const setDayHandler = (day) => {
     setActiveDay(day);
  }
  const meals = {
    name: 'kanapka z lososiem',
    ingredients: 'ingredients: chleb, łosoś'
  }

console.log(meals);
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
        <Meal meals={meals}/>
        <Meal meals={meals}/>
        <Meal meals={meals}/>
      </div>
      <button onClick={() => console.log(cartItems)} className={'flex p-4 mt-5 duration-200 font-bold justify-center shadow-sm self-center items-center w-1/6 rounded-2xl text-white bg-green-400 hover:bg-green-500 focus:bg-green-700'}>Confirm</button>
    </div>
  )
}
