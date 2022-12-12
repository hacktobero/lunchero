import { useContext, useEffect, useState } from "react"
import { MealsContext } from "../../Context/Context";
import {CgProfile} from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import { AuthContext } from "../../Context/AuthContext";
import { getUserByToken } from "../../../client-api/getUserByToken";
import Router, { useRouter } from "next/router";


const Navbar = () => {

    const router = useRouter()
    const context = useContext(MealsContext);
    const [token] = useContext(AuthContext)
    const [email, setEmail] = useState('')

    useEffect(() => {
        getUserByToken(token)
        .then((user) => setEmail(user.email))
    })
    console.log(token);



    return (
        <div className="w-full h-full flex justify-between shadow-lg">
            <div className='flex h-full md:mx-16 sm:mx-4 p-2 rounded flex-col justify-around cursor-pointer ease-in-out duration-150 '>
            <IconContext.Provider value={{ size: '3rem' }}>
                <CgProfile onClick={()=>{router.push('/clientProfile')}} role='userIcon' className="shadow-lg flex self-center rounded-full "></CgProfile>
            </IconContext.Provider>
                <h2 onClick={()=>{router.push('/clientProfile')}} role='email' className='w-1/3 lg:text-xl sm:text-xs text-center'>{email}</h2>
            </div>
            <div className='lg:text-5xl sm:text-4xl w-fit md:mx-16 sm:mx-4 flex justify-end items-center text-green-400 font-bold'>
                Lunchero
            </div>
        </div>
    )
}

export default Navbar
