
import { IconContext } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import { MealsContext } from "../../../Context/Context";
import { useContext } from "react";

export default function Dish({ name, ingredients, id }) {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, data } = useContext(MealsContext)
  const quantity = getItemQuantity(id)

  return (
    <div role='dish' className='w-full p-3 cursor-pointer duration-200 border-green-300 rounded-md flex justify-between items-center shadow-lg'>
      <div>
        <p className='text-xl'>{name}</p>
        <p className='text-sm  text-gray-300'> {`Ingredients: ${ingredients}`}</p>
      </div>
      <div className='flex flex-col w-1/3 items-end'>
        <div className='flex lg:w-2/3 sm:w-full items-center justify-end gap-2'>
          <button onClick={() => increaseCartQuantity(id)} className='border rounded-full w-10 h-10 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
            <IconContext.Provider value={{ size: '1.3em' }}>
              <IoMdAdd />
            </IconContext.Provider>
          </button>
          <p className='w-1/3 text-green-500 text-2xl text-center'>{quantity}</p>
          <button onClick={() => decreaseCartQuantity(id)} className='border rounded-full w-10 h-10 duration-150 border-green-500 bg-green-500 text-white flex justify-center items-center font-bold hover:bg-green-600'>
            <IconContext.Provider value={{ size: '1.3em' }}>
              <IoRemove />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  )

}
