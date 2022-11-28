import { useEffect, useState } from "react";
import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";
import { createUser } from "../client-api/createUser";
import { generateToken } from "../client-api/generateToken";
export default function Home() {

  useEffect(() => {
    const asyncFn = async () => {
      const res = await generateToken('string1234@string.pl', 'string1223');
      console.log(res);
    };
    asyncFn();
  }, []);
  
  return (
    <div className={'flex w-full h-screen items-center justify-start flex-col'}>
      <Navbar/>
      <div className={'flex h-full w-full justify-center self-center my-4'}>
        <MenuBar/>
      </div>
    </div>

  )
}
