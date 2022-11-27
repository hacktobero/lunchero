import { useEffect } from "react";
import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";
import Meal from '../src/components/client/meals-section/Meal';

export default function Home() {

  useEffect(() => {
    const asyncFn = async () => {
      // const res = await getUserById(1)
      const res = await createUser("129@email.com", "1", "12345678")
      console.log(res)
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
