import { useState, useContext } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Dish from "./Dish";
import { MealsContext } from '../../../Context/Context';


export default function Meal(props) {


    const [show, setShow] = useState(false);
    const context = useContext(MealsContext);

    // const meals = context?.data?.menu.meals;
   
    // const breakfastMeals = meals.filter(meal => meal.type === 'Breakfast');
    // const lunchMeals = meals.filter(meal => meal.type === 'Lunch');
    // const extraMeals = meals.filter(meal => meal.type === 'Extra');
    


    return (
        <div className="flex border-b  h-auto border-b-green-500 text-lg justify-between flex-col items-center p-4 font-bold ">
            <div className={`flex justify-between items-center w-full duration-200  hover:text-green-500 ${show ? 'text-green-500' : ''}`}>
                <h1>Breakfast</h1>
                <div>
                    <button onClick={() => setShow(!show)} className='border rounded-full w-10 h-10 mr-3 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600 '>
                        {!show ?
                            <IconContext.Provider value={{ size: '2em' }}>
                                <MdArrowDropDown />
                            </IconContext.Provider>
                            :
                            <IconContext.Provider value={{ size: '2em' }}>
                                <MdArrowDropUp />
                            </IconContext.Provider>}
                    </button>
                </div>
            </div>
            {show &&
                <div className={'w-full'}>
                    <Dish name={props.meals.name} ingredients={props.meals.ingredients} id={props.meals.name} />
                    <Dish name={props.meals.name} ingredients={props.meals.ingredients} id={props.meals.name} />
                </div>
            }
        </div>
    )
}
