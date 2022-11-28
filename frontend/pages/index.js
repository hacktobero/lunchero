import { useEffect, useState } from "react";
import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";
import { createUser } from "../client-api/createUser";
import { generateToken } from "../client-api/generateToken";
import { getUserByToken } from '../client-api/getUserByToken';
import { deleteUser } from '../client-api/deleteUser';
import { updateUserEmail } from '../client-api/updateUserEmail';
export async function getServerSideProps() {
  const response = await updateUserEmail('test333@test333.pl', 'haslohaslo12');

  return {
    props: {
      response
    }
  }
}


export default function Home({ response }) {

  console.log(response)

  useEffect(() => {
    const asyncFn = async () => {
      const res = await updateUserEmail(19, 'test4445@test444.pl' ,response.access_token);
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
