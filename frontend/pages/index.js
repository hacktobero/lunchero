import { useState, useRef, useContext } from "react"
import { useRouter } from "next/router";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { generateToken } from "../client-api/generateToken";
import { AuthContext } from "../src/Context/AuthContext";

const Login = () => {

    const router = useRouter()
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
    const [, setToken] = useContext(AuthContext);

    const emailRef = useRef()
    const passwordRef = useRef()

    const submitHandler = async (e) => {
        e.preventDefault()
        const authLoginValues = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const token = await generateToken(authLoginValues.email, authLoginValues.password)
        if (!token) {
            setError(true)
            return
        }
        setToken(token)
        localStorage.setItem('luncheroToken', token)
        router.push('/client')
    }


    const toggle = () => {
        setOpen(!open)
    }

    return (
        < div className='grid grid-cols-1 text-lg  sm:grid-cols-1 h-screen w-full'>
            <h1 className='fixed text-green-400 border-b-2 border-black font-bold lg:text-6xl sm:text-3xl top-5 justify-self-center lg:right-28 lg:top-10'>Lunchero</h1>
            <div className=' flex flex-col  justify-center'>
                <form onSubmit={submitHandler} className='xxl:w-96 xxl:h-144  md:max-w-sm font-bold sm:max-w-xs drop-shadow-2xl mx-auto bg-white border-green-500 solid border-2 sm:p-10 rounded-lg'>
                    <h2 className='text-black text-center text-4xl pb-14'>Log In</h2>
                    <div className='flex flex-col  text-black pb-14 py-8 xxl:py-12'>
                        <label className='relative'>
                            <input ref={emailRef} type="text" placeholder="Input" className={`pl-4 pr-7 w-64 sm:w-60 p-2 text-black text-sm border-2  rounded-lg border-opacity-50 outline-none focus:border-green-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${error ? 'border-red-600' : 'focus:border-green-500'}`} />
                            <span className='bg-white text-sm text-black text-opacity-80 absolute top-2.5 left-1 px-1 transition duration-200 input-text'>Email</span>
                        </label>
                    </div>
                    <div className='flex flex-col text-black py-6 relative'>
                        <label className='relative'>
                            <input ref={passwordRef} role='passwordInput' type={(open === false) ? 'password' : 'text'} placeholder="Input" className={`pl-4 pr-7 w-64 sm:w-60 p-2 text-black text-sm border-2  rounded-lg border-opacity-50 outline-none focus:border-green-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${error ? 'border-red-600' : 'focus:border-green-500'}`} />
                            <span className={`bg-white text-sm text-black text-opacity-80 absolute top-2.5 left-2 px-1 transition duration-200 ${(open === false) ? 'input-password' : 'input-text'}`}>Password</span>
                        </label>
                        <div className='absolute right-2 sm:right-1 sm:bottom-8 text-xl bottom-9'>
                            {(open !== false) ? <AiFillEye role='FillEye' onClick={toggle} /> : <AiFillEyeInvisible role='FillEyeInvisible' onClick={toggle} />}
                        </div>
                    </div>
                    <h1 className="cursor-pointer text-sm text-center text-green-800 hover:drop-shadow-md ">Reset password</h1>
                    <h1 onClick={async () => { router.push('/register') }} className="cursor-pointer text-green-800 text-sm text-center hover:drop-shadow-md mt-4">I do not have an account yet</h1>
                    <div className='w-full flex flex-col items-center'>
                        <button className='w-1/2 justify-center font-bold text-lg drop-shadow-xl m-auto content-center text-white xxl:mt-14 mt-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 focus:bg-green-700'>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
