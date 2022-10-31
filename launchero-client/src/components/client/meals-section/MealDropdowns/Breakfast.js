import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Dish from "../Dish";

export default function Breakfast({ meals }) {

    const [show, setShow] = useState(false);

    return (
        <>
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
                    {meals.map((meal) => {
                        return (
                            <Dish name={meal.name} ingredients={meal.ingredients} id={meal.id} />
                        )
                    })}
                </div>
            }
        </>
    )
}