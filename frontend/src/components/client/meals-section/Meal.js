import { useState, useContext } from 'react';
import { MealsContext } from '../../../Context/Context';
import Breakfast from './MealDropdowns/Breakfast';
import Lunch from './MealDropdowns/Lunch';
import Extra from './MealDropdowns/Extra';


export default function Meal({ children }) {

    const context = useContext(MealsContext);

    const meals = context?.data?.menu?.meals;

    const breakfastMeals = meals?.filter(meal => meal.type === 'Breakfast');
    const lunchMeals = meals?.filter(meal => meal.type === 'Lunch');
    const extraMeals = meals?.filter(meal => meal.type === 'Extra');




    return (
        <>
            <div>
                <div className='flex border-b  h-auto border-b-green-500 text-lg justify-between flex-col items-center p-4 font-bold '>
                    <Breakfast meals={breakfastMeals}/>
                </div>
            </div>
            <div>
                <div className='flex border-b  h-auto border-b-green-500 text-lg justify-between flex-col items-center p-4 font-bold '>
                    <Lunch meals={lunchMeals}/>
                </div>
            </div>
            <div>
                <div className='flex border-b  h-auto border-b-green-500 text-lg justify-between flex-col items-center p-4 font-bold '>
                    <Extra meals={extraMeals}/>
                </div>
            </div>
        </>
    )
}
