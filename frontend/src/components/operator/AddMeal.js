import {FaRegTimesCircle} from 'react-icons/fa'
import { useContext } from 'react'
import { MealsContext } from '../../Context/Context'

const AddMeal = () => { 
    const context = useContext(MealsContext)


    return(
        <div role='AddMealMainDiv' className=' fixed justify-center flex items-center top-0 h-screen bg-backdrop w-full '>
                        <div className='flex flex-col h-auto w-4/5 lg:w-1/2 shadow-lg opacity-95 bg-white rounded-md  self-center relative'>
                                <button
                                role='closeButton'
                                className='right-4 z-10 top-3 absolute'
                                onClick={() =>{ 
                                context.showHandler()
                                }}>
                                <FaRegTimesCircle/>
                                </button>

                                <div className='grid h-auto w-9/10 xl:mt-0 xxl:mt-5 sm:mt-0 text-black self-center py-6 px-5 relative'>
                                    <form className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8'>
                                            <div className='grid lg:col-span-1  col-span-2 w-2/3'>
                                            <label className='font-bold'>Meal name</label>
                                            <input className='rounded-lg flex-col text-black bg-gray-300 mt-2  outline-none p-2 shadow-xl   focus:border-gray-300' ></input>
                                            </div>

                                            <div className='grid w-1/4 col-span-1 lg:ml-20'>
                                            <label className='font-bold'>Preferences</label>
                                            <select required className='flex-col rounded-lg text-black bg-gray-300 mt-2  outline-none p-2    shadow-xl focus:border-gray-300'>
                                                <option value=''></option>
                                                <option value='Meat'>Meat</option>
                                                <option value='Vege'>Vege</option>
                                                <option value='Keto'>Keto</option>
                                            </select>  
                                            </div>
                                        <div className='grid xl:mb-0 xxl:mb-10 sm:mb-0 col-span-2 text-black w-full relative'>
                                        <label className='font-bold'>Ingredients</label>
                                        <input className='rounded-lg text-black bg-gray-300 mt-2  outline-none p-2  shadow-xl focus:border-gray-300' ></input>
                                        </div>
                                        <div className='flex my-4 col-span-2 gap-10 lg:gap-40'>
                                            <div className='grid lg:col-span-1 col-span-2 w-1/2'>
                                                <label className='font-bold'>Type</label>
                                                <select required className='flex-col rounded-lg text-black bg-gray-300   outline-none p-2 shadow-xl focus:border-gray-300'>
                                                    <option value=''></option>
                                                    <option value='Breakfast'>Breakfast</option>
                                                    <option value='Lunch'>Lunch</option>
                                                    <option value='Extra'>Extra</option>
                                                </select>  
                                            </div>

                                            <div className='mt-8 w-2/4 h-full'>
                                            <button className='w-full drop-shadow-xl p-2 m-auto content-center text-2xl text-white  bg-green-500 rounded-lg hover:bg-green-600'>Dodaj</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
    )
 }

 export default AddMeal