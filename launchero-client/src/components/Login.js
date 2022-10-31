import Link from "next/link"
import { useContext, useState } from "react"
import { useRouter } from "next/router";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Login =  () => {

    const [error, setError] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [open, setOpen] = useState(false)

    const router = useRouter()
       const toggle = () => { 
           setOpen(!open)
        }
    
    return(
        < div className="grid grid-cols-1  sm:grid-cols-1 h-screen w-full">
            <div className=" flex flex-col  justify-center">
                <form className="xxl:w-96 xxl:h-144  md:max-w-sm sm:max-w-xs drop-shadow-2xl mx-auto bg-white border-green-500 solid border-2 p-20 sm:p-14 px-20 rounded-lg">
                    <h2 className="text-green-500 font-bold text-center text-4xl">Zaloguj się</h2>
                    <div className="flex flex-col  text-green-500 py-6 xxl:py-12">
                        <label className={'font-bold'}>Email</label>
                        <input  className={`rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  ${error ? 'border-red-600' : 'border focus:border-gray-300'}`}/>
                    </div>
                    <div className="flex flex-col text-green-500 py-4 relative">
                        <label className={'font-bold'}>Hasło</label>
                        <input  className={`rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  ${error ? 'border-red-600' : 'border focus:border-gray-300'}`} 
                        type={(open===false)?'password':'text'}>
                        </input>
                        <div className="absolute right-2 text-xl bottom-7">

                            {(open===false)?<AiFillEye onClick={toggle}/>:<AiFillEyeInvisible onClick={toggle}/>}
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                      <button className="w-1/2 justify-center font-bold text-lg drop-shadow-xl m-auto content-center text-white xxl:mt-14 mt-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 focus:bg-green-700">Zaloguj</button>
                    </div>
                </form>
            </div>
        </div>
    )
 }
 export default Login
