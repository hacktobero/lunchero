import { IconContext } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import { useState, useContext } from "react";
import { MealsContext } from "../../../Context/Context";

export default function Dish({name, ingredients}) {
  const [count, setCount] = useState(0);

  const context = useContext(MealsContext);

  const { meal } = context?.data;

  console.log(meal);

  const decrementHandler = () => {
    if (count > 0) {
      setCount(prevState => prevState - 1)
    } else {
      setCount(0)
    }
  };

  return (
    <div className='w-full p-3 cursor-pointer duration-200 border-green-300 rounded-md flex justify-between items-center shadow-lg'>
      <div>
        <p className='text-xl'>{meal.description}</p>
        <p className='text-sm  text-gray-300'> {`Ingredients: ${meal.ingredients}`}</p>
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
  )

}
