
import { IconContext } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import { MealsContext } from "../../../Context/Context";
import { useContext } from "react";

export default function Dish({ name, ingredients, id }) {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useContext(MealsContext)

  const quantity = getItemQuantity(id)

  return (
    <div role='dish' className='w-full flex md:flex-row sm:flex-col p-3 cursor-pointer duration-200 border-green-300 rounded-md justify-between items-center shadow-lg'>
      <div className='md:text-start sm:text-center'>
        <p className='text-xl'>{name}</p>
        <p className='text-sm  text-gray-300'> {`Ingredients: ${ingredients}`}</p>
      </div>
      <div className='flex flex-col md:w-1/3 sm:w-2/3 mt-2 items-end'>
        <div className='flex lg:w-2/3 sm:w-full items-center dm:justify-end sm:justify-center gap-2'>
          <button role='increaseCartQuantity' onClick={() => increaseCartQuantity(id)} className='border rounded-full w-10 h-10 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
            <IconContext.Provider value={{ size: '1.3em' }}>
              <IoMdAdd />
            </IconContext.Provider>
          </button>
          <p role='itemsCounter' className='w-1/3 text-green-500 text-2xl text-center'>{quantity}</p>
          <button role='decreaseCartQuantity' onClick={() => decreaseCartQuantity(id)} className='border rounded-full w-10 h-10 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
            <IconContext.Provider value={{ size: '1.3em' }}>
              <IoRemove />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  )

}
