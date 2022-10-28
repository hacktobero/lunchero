
const Navbar = () => { 

    const profilePhoto = [{
        photo: 'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
      }]
    return(
        <div className={' w-full flex mb-6  sm:w-full  rounded h-8/10 mx-auto bg-white-background '}>
            
                <div className=" w-full h-1/2 flex  md:flex shadow-lg">
                    <div className='flex lg:mx-10 lg:my-4 lg:p-8 sm:p-3 sm:my-0  w-44 rounded flex-col cursor-pointer ease-in-out duration-150 '>
                        <img className="h-full flex self-center rounded-full " src={profilePhoto[0].photo}></img>
                        <p className=' text-2xl  text-center'>username</p>
                    </div>

                     <div className='text-5xl w-2/3 flex justify-end items-center'>
                     Launchero
                    </div>
                </div>
            </div>
        
    )
}

 export default Navbar