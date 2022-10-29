import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default function Meal() {
    const [show, setShow] = useState(false);
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
                <div className='w-3/4 mx-auto flex justify-between items-center'>
                    <div>
                        <p className='text-xl'>Kanapka z łososiem</p>
                        <p className='text-sm  text-gray-300'>Składniki: chleb, łosoś</p>
                    </div>
                    <button className='border rounded-full w-12 h-12 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
                        <IconContext.Provider value={{size: '1.3em'}}>
                            <IoMdAdd />
                        </IconContext.Provider>
                    </button>
                </div>
            }
        </div>
    )
}
