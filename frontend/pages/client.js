import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";


export default function Home() {


  return (
    <div className={'flex w-full h-screen items-center justify-start flex-col'}>

      <div className='w-full md:h-24 sm:h-16'>
        <Navbar />
      </div>

      <div className={'flex h-full w-full justify-center self-center my-4'}>
        <MenuBar />
      </div>
    </div>

  )
}

