import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { IoRemove } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import AddMeal from './AddMeal';
import { useContext } from 'react';
import { MealsContext } from '../../Context/Context';

export default function Meal(props) {

    const context = useContext(MealsContext)
    console.log(context);
    return (
        <div className="flex border-b  h-auto border-b-green-500 text-lg justify-between flex-col items-center p-4 font-bold ">
            {context.show && <AddMeal></AddMeal>
            }
            <div className={`flex justify-between items-center w-full duration-200  hover:text-green-500 ${context.show ? 'text-green-500' : ''}`}>
                <h1>Breakfast</h1>
                <div>
                    <button onClick={() =>{ 
                        context.showHandler()
                        }} className='border rounded-full w-12 h-12 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600 '>
                        
                            <IconContext.Provider value={{ size: '2em' }}>
                                <IoMdAdd />
                            </IconContext.Provider>
                    </button>
                </div>
            </div>
        </div>
    )
}
