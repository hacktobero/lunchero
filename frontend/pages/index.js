import { useEffect } from "react";
import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";
import Meal from '../src/components/client/meals-section/Meal';

export default function Home() {

 


  return (
    <div className={'flex w-full h-screen items-center justify-center flex-col'}>
      <Navbar />
      <div className={'flex h-full w-full justify-center self-center'}>
        <MenuBar />
      </div>
    </div>

  )
}
