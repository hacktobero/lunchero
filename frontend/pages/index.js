import { useEffect } from "react";
import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";
import Meal from '../src/components/client/meals-section/Meal';
import { getUserById } from '../client-api/getUserById';
import { createUser } from '../client-api/createUser';
import { generateToken } from '../client-api/generateToken';
import { deleteUser } from '../client-api/deleteUser';
export default function Home() {

  useEffect(() => {
    const asyncFn = async () => {
      try {
        const res = await getUserById(9);
        console.log(res)
      } catch (e) {
        console.log(e.message)
      }
    };
    asyncFn();
  }, []);


  return (
    <div className={'flex w-full h-screen items-center justify-center flex-col'}>
      <Navbar />
      <div className={'flex h-full w-full justify-center self-center'}>
        <MenuBar />
      </div>
    </div>

  )
}
