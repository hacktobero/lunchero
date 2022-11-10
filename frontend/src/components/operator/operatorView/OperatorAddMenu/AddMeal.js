import { FaRegTimesCircle } from 'react-icons/fa'
import { useContext, useRef} from 'react'
import { MealsContext } from '../../../../Context/Context'
import { IconContext } from "react-icons";

const AddMeal = () => {

    const context = useContext(MealsContext)


    const mealNameRef = useRef()
    const preferencesRef = useRef()
    const ingredientsRef = useRef()
    const typeRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredValues = {
            mealName: mealNameRef.current.value,
            preferences: preferencesRef.current.value,
            ingredients: ingredientsRef.current.value,
            type: typeRef.current.value
        }
        context.showHandler()
    }



    return (
        <div role='AddMealMainDiv' className=' fixed justify-center flex items-center top-0 h-screen bg-backdrop w-full '>
            <div className='flex flex-col h-auto w-4/5 lg:w-1/2 shadow-lg opacity-95 bg-white rounded-md  self-center relative'>
                <button className='right-4 z-10 top-3 absolute'
                    role='closeButton'
                    onClick={() => {
                        context.showHandler()
                    }}>
                    <IconContext.Provider value={{ size: '1.8em' }}>
                        <FaRegTimesCircle />
                    </IconContext.Provider>
                </button>

                <div className='grid h-auto w-9/10 xl:mt-0 xxl:mt-5 sm:mt-0 text-black self-center py-6 px-5 relative'>
                    <form className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8'>
                        <div className='grid lg:col-span-1  col-span-2 w-2/3'>
                            <label className='font-bold'>Meal name</label>
                            <input ref={mealNameRef} className='rounded-lg flex-col text-black bg-gray-300 mt-2  outline-none p-2 shadow-xl   focus:border-gray-300' ></input>
                        </div>
                        <div className='grid w-1/4 col-span-1 lg:ml-20'>
                            <label className='font-bold'>Preferences</label>
                            <select ref={preferencesRef} required className='flex-col rounded-lg text-black bg-gray-300 mt-2  outline-none p-2    shadow-xl focus:border-gray-300'>
                                <option value=''></option>
                                <option value='Meat'>Meat</option>
                                <option value='Vege'>Vege</option>
                                <option value='Keto'>Keto</option>
                            </select>
                        </div>
                        <div className='grid xl:mb-0 xxl:mb-10 sm:mb-0 col-span-2 text-black w-full relative'>
                            <label className='font-bold'>Ingredients</label>
                            <input ref={ingredientsRef} className='rounded-lg text-black bg-gray-300 mt-2  outline-none p-2  shadow-xl focus:border-gray-300' ></input>
                        </div>
                        <div className='flex my-4 col-span-2 gap-10 lg:gap-40'>
                            <div className='grid lg:col-span-1 col-span-2 w-1/2'>
                                <label className='font-bold'>Type</label>
                                <select ref={typeRef} required className='flex-col rounded-lg text-black bg-gray-300   outline-none p-2 shadow-xl focus:border-gray-300'>
                                    <option value=''></option>
                                    <option value='Breakfast'>Breakfast</option>
                                    <option value='Lunch'>Lunch</option>
                                    <option value='Extra'>Extra</option>
                                </select>
                            </div>

                            <div className='mt-8 w-2/4 h-full'>
                                <button onClick={handleSubmit} className='w-full drop-shadow-xl p-2 m-auto content-center text-2xl text-white  bg-green-500 rounded-lg hover:bg-green-600'>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMeal
