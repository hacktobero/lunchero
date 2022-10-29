

const AddMeal = () => { 
    return(
        <div className=' fixed justify-center flex top-0 h-screen bg-backdrop w-full '>
                        <div className='flex flex-col w-1/2 h-1/2 shadow-lg bg-white rounded-md  self-center'>
                                <div className="flex flex-col text-black py-4 px-5 relative">
                                    <label className={'font-bold'}>Meal name</label>
                                    <input className={'rounded-lg text-black bg-gray-300 mt-2 w-1/2 outline-none p-2 border-solid border-2   border-gray-400 focus:border-gray-300'} ></input>
                                </div>
                                <div className="flex flex-col text-black py-4 px-5 relative">
                                    <label className={'font-bold'}>ingredients</label>
                                    <input className={'rounded-lg text-black bg-gray-300 mt-2  outline-none p-2 border-solid border-2   border-gray-400 focus:border-gray-300'} ></input>
                                </div>
                        </div>
                    </div>
    )
 }

 export default AddMeal