import '@testing-library/react'
import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {MealsContext} from "../src/Context/Context";
import Dish from "../src/components/client/meals-section/Dish";


describe('if dish counter work', () => {
//  function items(cartItems) {
//   render(
//     <MealsContext.Provider value={{cartItems}} >
//       <Dish />
//     </MealsContext.Provider> )
//  }

  const setState = jest.fn();


  test('+ button increase quantity', () => {
    let cartItems = [];
    const setCartItems = jest.fn(()=>cartItems.push({id:10,getItemQuantity:1}));


    const increaseCartQuantity = jest.fn((id)=>  {
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
    })
    const decreaseCartQuantity = jest.fn()
    const getItemQuantity = jest.fn((id)=> cartItems?.find(item => item.id === id)?.quantity || 0)

    render(
      <MealsContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity }} >
        <Dish />
      </MealsContext.Provider> )


    const buttonElement = screen.getByRole("increaseCartQuantity")

    fireEvent.click(buttonElement)

    const divElement = screen.getByRole("itemsCounter")

    expect(divElement).toEqual("1")
  })
})


