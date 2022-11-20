import Navbar from "../src/components/shared-components/navbar"
import { useState } from "react";
import { useRouter } from "next/router";
import OperatorAddMenu from "../src/components/operator/add-menu-view/OperatorAddMenu";
import OperatorOrders from "../src/components/operator/orders-view/OperatorOrders";

const Operator = () => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


    const [activeDay, setActiveDay] = useState('');
    const [mealName, SetMealName] = useState('')
    const [ordersPush, SetOrdersPush] = useState(false)

    const router = useRouter();




    return(
        <div className='flex flex-col w-full h-screen items-center'>
          <Navbar />

          <div className='flex md:h-8 sm:h-12 md:w-1/3 sm:w-2/3 justify-center mb-2'>
            <button onClick={()=> SetOrdersPush(true)} className={`w-1/2 text-white shadow-lg bg-green-400 rounded-bl-xl ${ordersPush && ' bg-green-800 text-white'}`}>Add menu</button>
            <button onClick={()=> SetOrdersPush(false)} className={`w-1/2 text-white shadow-lg bg-green-400 rounded-br-xl ${!ordersPush && ' bg-green-800 text-white'}`}>Orders</button>
          </div>



          <div className='flex w-full h-full justify-center'>
            {!ordersPush&&<OperatorOrders />}
            {ordersPush&&<OperatorAddMenu />}
          </div>
        </div>
    )
 }

 export default Operator
