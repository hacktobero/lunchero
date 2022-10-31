import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import AddMeal from './AddMeal';
import { useContext } from 'react';
import { MealsContext } from '../../Context/Context';
import Dish from './Dish';

export default function Meal(props) {

    const context = useContext(MealsContext)
  
    return (
        <div className="flex h-auto text-lg justify-between flex-col items-center p-4 font-bold ">
            {context.show && <AddMeal></AddMeal>
            }
            <div className={`flex justify-center items-center w-full duration-200  hover:text-green-500 ${context.show ? 'text-green-500' : ''}`}>
                <h1></h1>
                <div>
                    
                </div>
            </div>
            <div className={'w-full'}>
            {context?.data?.menu?.meals?.map((meals) => {
                    return <Dish name={meals.name} ingredients={meals.ingredients}/>
                })}
              </div>
        </div>
    )
}
