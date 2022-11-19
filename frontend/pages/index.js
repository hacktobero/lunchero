import Navbar from "../src/components/shared-components/navbar";
import MenuBar from "../src/components/client/MenuBar";
import Meal from '../src/components/client/meals-section/Meal';
import { getUserById } from '../client-api/getUserById';
import { createUser } from '../client-api/createUser';
export default function Home() {

  getUserById(6).then((user) => console.log(user));
  createUser('email@email.pl','1', 'password1234')
  .then((data) => console.log(data)).catch(e => console.log(e))
  return (
    <div className={'flex w-full h-screen items-center justify-center flex-col'}>
      <Navbar />
      <div className={'flex h-full w-full justify-center self-center'}>
        <MenuBar />
      </div>
    </div>

  )
}
