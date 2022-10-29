import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { IoRemove } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function Meal() {
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
                    <button onClick={() => setShow(!show)} className='border rounded-full w-12 h-12 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600 '>
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
                <div className='w-3/4 mx-auto p-3 cursor-pointer duration-200 border-green-300 rounded-md flex justify-between items-center hover:shadow-md'>
                    <div>
                        <p className='text-xl'>Kanapka z łososiem</p>
                        <p className='text-sm  text-gray-300'>Składniki: chleb, łosoś</p>
                    </div>
                    <div className='flex items-center flex-col'>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => setCount(prevState => prevState + 1)} className='border rounded-full w-12 h-12 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
                                <IconContext.Provider value={{ size: '1.3em' }}>
                                    <IoMdAdd />
                                </IconContext.Provider>
                            </button>
                            <p className='text-green-500 text-2xl w-5 text-center'>{count}</p>
                            <button onClick={decrementHandler} className='border rounded-full w-12 h-12 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
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
