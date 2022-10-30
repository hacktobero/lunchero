import React, {useEffect, useState } from "react"
export const MealsContext = React.createContext({});



export default function ContextProvider ({children}) {

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  

  

  const showHandler = () => { 
    setShow(!show)
   }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data)
    };
    getData();
  }, []);


  
  const initialValues = {
    data,
    show,
    showHandler
  }


  return <MealsContext.Provider value={initialValues}> {children} </MealsContext.Provider>

}
