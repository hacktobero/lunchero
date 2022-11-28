import { useContext } from "react"
import { MealsContext } from "../../Context/Context";

const Navbar = () => {

    const context = useContext(MealsContext);

    const profilePhoto = [{
        photo: 'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
    }];

    return (
        <div className="w-full flex justify-between shadow-lg lg:h-32 sm:h-28">
            <div className='flex h-full md:mx-16 sm:mx-4 p-2 rounded flex-col justify-around cursor-pointer ease-in-out duration-150 '>
                <img className="shadow-lg h-2/3 flex self-center rounded-full " src={profilePhoto[0].photo}></img>
                <h2 data-testid='username' className='w-1/3 lg:text-xl sm:text-lg text-center'>{`${context?.data?.user ? `${context?.data?.user?.username}` : 'Loading...'}`}</h2>
            </div>
            <div className='lg:text-5xl sm:text-4xl w-fit md:mx-16 sm:mx-4 flex justify-end items-center text-green-400 font-bold'>
                Lunchero
            </div>
        </div>
    )
}

export default Navbar
