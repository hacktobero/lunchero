import {FaRegTimesCircle} from 'react-icons/fa'
import { useContext } from 'react'
import { MealsContext } from '../../Context/Context'

const AddMeal = () => { 
    const context = useContext(MealsContext)


    return(
        <div className=' fixed justify-center flex items-center top-0 h-screen bg-backdrop w-full '>
                        <div className='flex flex-col lg:h-2/5 xl:h-1/2 xxl:h-2/5 sm:w-1/2 h-1/2 shadow-lg opacity-95 bg-white rounded-md  self-center relative'>
                                <button className="right-4 z-10 top-3 absolute" 
                                onClick={() =>{ 
                                context.showHandler()
                                }}>
                                <FaRegTimesCircle/>
                                </button>

                                <div className="grid w-9/10 xl:mt-0 xxl:mt-10 sm:mt-0 text-black self-center py-6 px-5 relative">
                                    <form className='grid grid-cols-2 '>

                                        <div className='flex xl:mb-5 xxl:mb-10 sm:mb-0 my-4 col-span-2 gap-14'>
                                            <div className='grid sm:col-span-2 lg:col-span-1 w-2/3'>
                                            <label className={'font-bold'}>Meal name</label>
                                            <input className={'rounded-lg flex-col text-black bg-gray-300 mt-2  outline-none p-2 shadow-xl   focus:border-gray-300'} ></input>
                                            </div>

                                            <div className='grid w-1/4'>
                                            <label className={'font-bold'}>Preferences</label>
                                            <select required className="flex-col rounded-lg text-black bg-gray-300 mt-2  outline-none p-2    shadow-xl focus:border-gray-300">
                                                <option value=""></option>
                                                <option value="Meat">Meat</option>
                                                <option value="Vege">Vege</option>
                                                <option value="Keto">Keto</option>
                                            </select>  
                                            </div>
                                        </div>
                                        <div className="grid xl:mb-0 xxl:mb-10 sm:mb-0 col-span-2 text-black w-full relative">
                                        <label className={'font-bold'}>Ingredients</label>
                                        <input className={'rounded-lg text-black bg-gray-300 mt-2  outline-none p-2  shadow-xl focus:border-gray-300'} ></input>
                                        </div>
                                        <div className='flex my-4 col-span-2 gap-40'>
                                            <div className='grid col-span-1 w-1/2'>
                                                <label className={'font-bold'}>Type</label>
                                                <select required className="flex-col rounded-lg text-black bg-gray-300   outline-none p-2 shadow-xl focus:border-gray-300">
                                                    <option value=""></option>
                                                    <option value="Breakfast">Breakfast</option>
                                                    <option value="Lunch">Lunch</option>
                                                    <option value="Dessert">Dessert</option>
                                                </select>  
                                            </div>

                                            <div className='mt-8 w-2/4 h-full'>
                                            <button className="w-full drop-shadow-xl p-2 m-auto content-center text-2xl text-white  bg-green-500 rounded-lg hover:bg-green-600">Dodaj</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
    )
 }

 export default AddMeal