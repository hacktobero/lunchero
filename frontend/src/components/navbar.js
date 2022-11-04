import { useState, useEffect } from "react"

const Navbar = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setData(data)
            } catch (e) {
                console.log(e.message);
            }
        };
        getData();
    }, []);

    const profilePhoto = [{
        photo: 'https://freepikpsd.com/file/2019/10/default-profile-picture-png-1-Transparent-Images.png'
    }];

    const { user } = data;

    return (

        <div className=" w-full h-1/12 flex  md:flex shadow-lg">
            <div className='flex lg:mx-10 lg:my-4 lg:p-8 sm:p-3 sm:my-0 lg:w-28  sm:w-20 rounded flex-col cursor-pointer ease-in-out duration-150 '>
                <img className="shadow-lg  h-full ml-8 flex self-center rounded-full " src={profilePhoto[0].photo}></img>
                <h2 data-testid='username' className='w-full sm:ml-1 lg:ml-0 lg:text-xl sm:text-lg text-center'>{`${user ? `${user.username}` : 'You are currently not logged in'}`}</h2>
            </div>
            <div className='text-5xl w-2/3 flex justify-end items-center'>
                <h1 className=' text-green-400 font-bold'>Lunchero</h1>
            </div>
        </div>
    )
}

export default Navbar