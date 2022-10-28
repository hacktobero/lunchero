import Navbar from "../src/components/navbar";
import MenuBar from "../src/components/menubar/MenuBar";
import Meal from '../src/components/meals-section/Meal';
export default function Home() {
  return (
    <div className={'flex w-full items-center justify-center flex-col'}>
      <Navbar />
      <MenuBar />
      <div className='border border-black rounded-md  w-3/4'>
        <ul>
          <li className="w-full rounded-md">
            <Meal />
            <Meal />
          </li>
        </ul>
        

      </div>
    </div>

  )
}
