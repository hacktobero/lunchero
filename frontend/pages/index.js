import { useEffect, useState } from "react";
import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";
import Meal from '../src/components/client/meals-section/Meal';
import { getUserById } from '../client-api/getUserById';
import { createUser } from '../client-api/createUser';
import { generateToken } from '../client-api/generateToken';
import { deleteUser } from '../client-api/deleteUser';
import { getUserByToken } from '../client-api/getUserByToken';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const res = await generateToken('test111@test.pl', '123456789');

  return {
    props: {
      res,
    }
  }
}


export default function Home({ res }) {

  const [token, setToken] = useState(res);
  console.log(token)
  useEffect(() => {
    const asyncFn = async () => {
      const res = await getUserByToken(token.access_token);
      console.log(res);
    };
    asyncFn()
  }, [])

  return (
    <div className={'flex w-full h-screen items-center justify-center flex-col'}>
      <Navbar />
      <div className={'flex h-full w-full justify-center self-center'}>
        <MenuBar />
      </div>
    </div>

  )
}
