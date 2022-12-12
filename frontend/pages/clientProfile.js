import {CgProfile} from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import { AuthContext } from "../src/Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { getUserByToken } from "../client-api/getUserByToken";
import { useRouter } from 'next/router';


export default function profile() {
    const [token] = useContext(AuthContext)
    const [email, setEmail] = useState('')

    const router = useRouter()

    useEffect(() => {
        getUserByToken(token)
        .then((user) => setEmail(user.email))
    })
    console.log(email);
    return(
        <div className='flex-col flex items-center lg:mt-14 sm:mt-2'>
                <div className='flex self-center justify-center mt-16'>
                    <IconContext.Provider value={{ size: '7rem' }}>
                        <CgProfile role='userIcon' className="shadow-lg flex self-center rounded-full "></CgProfile>
                    </IconContext.Provider>
                </div>
                <h2 role='email' className='self-center justify-center lg:text-xl sm:text-md mt-5 text-center'>{email}</h2>
                <div className='flex flex-col w-full items-center mt-16'>
                    <h2>Preferences</h2>
                    <select required className='justify-center flex mt-1 rounded-lg text-center text-black border-2 border-green-500 sm:w-1/2 lg:w-1/5  outline-none p-2 shadow-xl hover:border-green-600'>
                        <option value=''>{/*user Preferences*/}</option>
                        <option value='Meat'>Meat</option>
                        <option value='Vege'>Vege</option>
                        <option value='Keto'>Keto</option>
                    </select>
                    <button className="drop-shadow-xl text-white mt-2 px-2 py-2 bg-green-600 rounded-lg hover:bg-green-700 ">Submit</button>
                </div>
                <button onClick={ () => { router.push('/') }} className="mt-40 drop-shadow-xl text-white px-6 py-4 bg-green-600 rounded-lg hover:bg-green-700 ">Log out</button>
        </div>
    )
}
