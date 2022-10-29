import Navbar from "../src/components/navbar";
import MenuBar from "../src/components/client/menubar/MenuBar";
import Meal from '../src/components/client/meals-section/Meal';
export default function Home() {
  const name = 'client'
  return (
    <div className={'flex w-full h-screen items-center justify-center flex-col'}>
      <Navbar name={name}/>
      <div className={'flex h-full w-full justify-center self-center'}>
        <MenuBar/>
      </div>
    </div>

  )
}
