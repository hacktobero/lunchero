import { useState, useRef } from "react"
import { useRouter } from "next/router";

const Register = () => {

  const router = useRouter()

  const [error, setError] = useState(false);

  const emailRef = useRef()
  const passwordRef = useRef()
  const reapeatPasswordRef = useRef()
  

  const onSubmit = (e) => { 
    e.preventDefault()
    const authRegisterValues = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        repeatPassword: reapeatPasswordRef.current.value
    }
    console.log(authRegisterValues);
   }

  const passwordCheck= () => {
    if (passwordRef.current.value !== reapeatPasswordRef.current.value) {
      setError(true)
      console.log(error)
    }
    else{
        setError(false)
    }
  }



  return (
    <div className="grid grid-cols-1 text-lg sm:grid-cols-1 h-screen w-full">
        <h1 className='fixed text-green-400 border-b-2 border-black font-bold lg:text-6xl sm:text-3xl top-5 justify-self-center lg:right-28 lg:top-10'>Lunchero</h1>
        <div className="bg-white flex flex-col justify-center mt-8">
        <form onSubmit={onSubmit} className="xxl:w-96 xxl:h-144 t md:max-w-sm sm:max-w-xs drop-shadow-2xl mx-auto bg-white border-green-500 solid border-2 sm:p-12 px-20 rounded-lg">
          <h2 className="text-black text-center font-bold pb-5 text-4xl">Register</h2>
          <div className="flex flex-col  text-black py-6 pt-10">
            <label className='relative'>
                <input ref={emailRef} role='emailInput' type="text" placeholder="Input" className='px-4 p-2 w-60 text-sm text-black border-2 rounded-lg border-opacity-50 outline-none focus:border-green-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='bg-white text-sm text-black text-opacity-80 absolute top-3 left-2 px-1 transition duration-200 input-text'>Email</span>
            </label>
          </div>
          <div className="flex flex-col  text-black py-8">
            <label className='relative'>
                <input ref={passwordRef} role='passwordInput' type="password" placeholder="Input" className={`${error ? 'border-red-600' : 'focus:border-green-500'} px-4 p-2 w-60 text-sm text-black border-2 rounded-lg border-opacity-50 outline-none focus:border-green-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200`} />
                <span className='bg-white text-sm text-black text-opacity-80 absolute top-3 left-2 px-1 transition duration-200 input-password'>Password</span>
            </label>
          </div>
          <div className="flex flex-col  text-black py-8">
            <label className='relative'>
                <input ref={reapeatPasswordRef} role='repeatPasswordInput' type="password" placeholder="Input" className={`${error ? 'border-red-600' : 'focus:border-green-500'} w-60 px-4 p-2 text-sm text-black border-2 rounded-lg border-opacity-50 outline-none focus:border-green-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200`} />
                <span className={`bg-white text-sm text-black text-opacity-80 absolute top-3 left-2 px-1 transition duration-200 input-password`}>Repeat password</span>
            </label>
          </div>
          <p onClick={async () => { await router.push('/auth/login') }} className="cursor-pointer font-bold text-sm text-green-800 text-center hover:drop-shadow-md">I already have an account</p>
          <div className="w-full flex flex-col items-center">
            <button role='button' onClick={passwordCheck} type='submit' className="w-1/2 justify-center drop-shadow-xl m-auto content-center text-white mt-5  py-3 bg-green-500 rounded-lg hover:bg-green-600 focus:bg-green-700">Zarejestruj</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register
