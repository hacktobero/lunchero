import IoIosArrowDropdown from 'react-icons/io5';
import { useState } from 'react';
export default function Meal() {
    const [show, setShow] = useState(false);
    return (
        <div className="flex text-lg justify-between flex-col items-center p-2 font-bold ">
            <div className='flex justify-between items-center w-full duration-200  hover:text-green-500'>
                <h1>Breakfast</h1>
                <div>
                    <button onClick={() => setShow(!show)} className='border rounded-full border-green-500 bg-green-500 text-white p-1 font-bold '>{show ? 'Hide' : 'Show'}</button>
                </div>
            </div>
            {show && 
                <div className='w-3/4 mx-auto flex justify-between items-center'>
                    <div>
                        <p>Kanapka z łososiem</p>
                        <p className='text-sm text-gray-300'>Składniki: chleb, łosoś</p>
                    </div> 
                    <button className="bg-green-500 text-white font-bold w-10 h-10 text- rounded-full">+</button>
                </div>
            }
        </div>
    )
}