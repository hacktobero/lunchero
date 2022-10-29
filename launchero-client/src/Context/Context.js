import React, {useEffect, useState } from "react"
export const MealsContext = React.createContext();


export default function ContextProvider ({children}) {

  const [data, setData] = useState([]);

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
  }


  return <MealsContext.Provider value={initialValues}> {children} </MealsContext.Provider>

}
