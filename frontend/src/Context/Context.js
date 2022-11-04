import React, {useEffect, useState } from "react"

export const MealsContext = React.createContext({});



export default function ContextProvider ({children}) {

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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

  function getItemQuantity(id) {
    return cartItems?.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity (id) {
    setCartItems (currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, {id, quantity:1}]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity (id) {
    setCartItems (currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.map(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart (id) {
    setCartItems(currItems => {
      return currItems.map(item => item.id !== id)
    })
  }


  const initialValues = {
    removeFromCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
    setCartItems,
    cartItems,
    data,
    show,
    showHandler
  }


  return <MealsContext.Provider value={initialValues}> {children} </MealsContext.Provider>

}
