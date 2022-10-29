import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { IoRemove } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function Meal(props) {
    const [show, setShow] = useState(false);



    const [count, setCount] = useState(0);


    const decrementHandler = () => {
        if (count > 0) {
            setCount(prevState => prevState - 1)
        } else {
            setCount(0)
        }
    };
    return (
        <div className="flex border-b  h-auto border-b-green-500 text-lg justify-between flex-col items-center p-4 font-bold ">
            <div className={`flex justify-between items-center w-full duration-200  hover:text-green-500 ${show ? 'text-green-500' : ''}`}>
                <h1>Breakfast</h1>
                <div>
                    <button onClick={() => setShow(!show)} className='border rounded-full w-10 h-10 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600 '>
                        {!show ?
                            <IconContext.Provider value={{ size: '2em' }}>
                                {props.buttonIcon}
                            </IconContext.Provider>
                            :
                            <IconContext.Provider value={{ size: '2em' }}>
                                {props.buttonIcon}
                            </IconContext.Provider>}
                    </button>
                </div>
            </div>
            {show &&
                <div className='w-full p-3 cursor-pointer duration-200 border-green-300 rounded-md flex justify-between items-center shadow-lg'>
                    <div>
                        <p className='text-xl'>{props.meals.name}</p>
                        <p className='text-sm  text-gray-300'> {props.meals.ingredients}</p>
                    </div>
                    <div className='flex flex-col w-1/3 items-end'>
                        <div className='flex lg:w-2/3 sm:w-full items-center justify-end gap-2'>
                            <button onClick={() => setCount(prevState => prevState + 1)} className='border rounded-full w-10 h-10 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
                                <IconContext.Provider value={{ size: '1.3em' }}>
                                    <IoMdAdd />
                                </IconContext.Provider>
                            </button>
                            <p className='w-1/3 text-green-500 text-2xl text-center'>{count}</p>
                            <button onClick={decrementHandler} className='border rounded-full w-10 h-10 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
                                <IconContext.Provider value={{ size: '1.3em' }}>
                                    <IoRemove />
                                </IconContext.Provider>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
