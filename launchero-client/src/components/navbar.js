
const Navbar = (props) => {

    const profilePhoto = [{
        photo: 'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
      }]
    return(

        <div className=" w-full h-1/12 flex  md:flex shadow-lg">
            <div className='flex lg:mx-10 lg:my-4 lg:p-8 sm:p-3 sm:my-0 lg:w-28  sm:w-20 rounded flex-col cursor-pointer ease-in-out duration-150 '>
                <img className="shadow-lg  h-full ml-8 flex self-center rounded-full " src={profilePhoto[0].photo}></img>
                <p className='w-full sm:ml-1 lg:ml-0 lg:text-xl sm:text-lg text-center'>{props.name}</p>
            </div>
           <div className='text-5xl w-2/3 flex justify-end items-center'>
             <p className=' text-green-400 font-bold'>Lunchero</p>
            </div>
        </div>
    )
}

 export default Navbar
