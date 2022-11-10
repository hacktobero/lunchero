

export default function Dish ({name, ingredients, role}) {


  return(
    <div role='dishElement' className='w-full p-3 cursor-pointer duration-200 border-green-300 rounded-md flex justify-between items-center shadow-lg'>
      <div>
        <p role='name' className='text-xl'>{name}</p>
        <p role='ingredients' className='text-sm  text-gray-300'> {ingredients}</p>
      </div>
      <div className='flex flex-col w-1/3 items-end'>
        <div className='flex lg:w-2/3 sm:w-full items-center justify-end gap-2'>
        </div>
      </div>
    </div>
  )

}
