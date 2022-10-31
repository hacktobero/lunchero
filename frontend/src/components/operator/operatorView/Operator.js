import Navbar from "../../navbar"
import { useState } from "react";
import Tab from "../../client/menubar/Tab";
import Meal from "../Meal";
import { IoMdAdd } from 'react-icons/io';
import { useRouter } from "next/router";
import AddMenu from "./OperatorAddMenu";
import OperatorOrders from "./OperatorOrders";

const Operator = () => { 

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


    const [activeDay, setActiveDay] = useState('');
    const [mealName, SetMealName] = useState('')
    const [ordersPush, SetOrdersPush] = useState(false)

    const router = useRouter();



    const meals = {
        name: 'essa',
        ingredients: 'esaas',
        type:'',
        preferences:''
      }


    return(
        <div className={"flex flex-col"}>
            <div className="flex">
                <Navbar></Navbar>
            </div>

            <div className="flex h-8 justify-center">
                <button onClick={()=> SetOrdersPush(true)} className={`w-1/6 text-white shadow-lg bg-green-400 rounded-bl-xl ${ordersPush && ' bg-green-800 text-white'}`}>Add menu</button>
                <button onClick={()=> SetOrdersPush(false)} className={`w-1/6 text-white shadow-lg bg-green-400 rounded-br-xl ${!ordersPush && ' bg-green-800 text-white'}`}>Orders</button>
            </div>

            {ordersPush&&<AddMenu></AddMenu>}
            
            {!ordersPush&&<OperatorOrders></OperatorOrders>}
        </div>
    )
 }

 export default Operator