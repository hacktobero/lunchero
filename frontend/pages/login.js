import { useState } from "react"
import { useRouter } from "next/router";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import {createUser} from "../client-api/createUser";

const Login = () => {

    const [error, setError] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [open, setOpen] = useState(false)

    const router = useRouter()
       const toggle = () => {
           setOpen(!open)
        }
    // const submitHandler = async (e)=> {
    //   e.preventDefault()
    //   if (error){
    //     return ;
    //   }
    //   /* piece for register component */
    //   // const res = await createUser(loginEmail, "1", loginPassword)
    //   // console.log(res)
    // }
    return(
        < div className='grid grid-cols-1  sm:grid-cols-1 h-screen w-full'>
            <h1 className="fixed text-green-400 border-b-2 border-black font-bold text-6xl top-5 justify-self-center lg:right-28 lg:top-10">Lunchero</h1>
            <div className=" flex flex-col  justify-center">
                <form onSubmit={submitHandler} className="xxl:w-96 xxl:h-144  md:max-w-sm sm:max-w-xs drop-shadow-2xl mx-auto bg-white border-green-500 solid border-2 p-20 sm:p-14 px-20 rounded-lg">
                    <h2 className="text-black font-bold text-center text-4xl">Zaloguj się</h2>
                    <div className="flex flex-col  text-black py-6 xxl:py-12">
                        <label className={'font-bold'}>Email</label>
                        <input onChange={(e)=> {setLoginEmail(e.target.value)}} className={`rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  ${error ? 'border-red-600' : 'border focus:border-gray-300'}`}/>
                    </div>
                    <div className="flex flex-col text-black py-4 relative">
                        <label className={'font-bold'}>Hasło</label>
                        <input onChange={(e)=> {setLoginPassword(e.target.value)}} role='passwordInput' className={`rounded-lg text-black bg-gray-300 mt-2 outline-none p-2 border-solid border-2  ${error ? 'border-red-600' : 'border focus:border-gray-300'}`}
                        type={(open===false)?'password':'text'}>
                        </input>
                        <div className="absolute right-2 text-xl bottom-7">

                            {(open===false)?<AiFillEye role='FillEye' onClick={toggle}/>:<AiFillEyeInvisible role='FillEyeInvisible' onClick={toggle}/>}
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                      <button type='submit' className="w-1/2 justify-center font-bold text-lg drop-shadow-xl m-auto content-center text-white xxl:mt-14 mt-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 focus:bg-green-700">Zaloguj</button>
                    </div>
                </form>
            </div>
        </div>
    )
 }
 export default Login
