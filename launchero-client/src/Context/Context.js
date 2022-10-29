import React, {useEffect} from "react"

export const MealsContext = React.createContext();





export default function ContextProvider ({children}) {

  useEffect(() => {
    const MealsJson = async () => {
      const res = await fetch("/data.json");
      const newData = await res.json();
      console.log(newData)
    };

    MealsJson();
  },[]);


  const initialValues = {

  }


  return <MealsContext.Provider value={initialValues}> {children} </MealsContext.Provider>

}
